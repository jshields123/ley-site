'use client';

import { FormField } from '../FormField';
import { IContact } from '../../interfaces/common';
import toast, { Toaster } from 'react-hot-toast';

import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { Button } from '../Button/Button';

const Form = () => {
  const [firstName, setFirstName] = useState<IContact['firstName']>('');
  const [lastName, setLastName] = useState<IContact['lastName']>('');
  const [company, setCompany] = useState<IContact['company']>('');
  const [phone, setPhone] = useState<IContact['phone']>('');
  const [email, setEmail] = useState<IContact['email']>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const contact: IContact = {
      firstName,
      lastName,
      email,
      phone,
      company,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      console.log(contact);
      if (res.ok) {
        const data = await res.json();
      } else {
        const { msg } = await res.json();
        console.log('error adding contact', msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    try {
      console.log(contact);
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (res.ok) {
        setFirstName('');
        setLastName('');
        setCompany('');
        setPhone('');
        setEmail('');
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        const { msg } = await res.json();
        setError(msg);
      }
    } catch (error) {
      console.log(error);
      toast('Error', { position: 'bottom-center' });
    } finally {
      setLoading(false);
      toast('Details sent successfully', { position: 'bottom-center' });
    }
  };

  return (
    <form className={styles.form} role="form" onSubmit={handleSubmit}>
      <FormField
        label={'First Name*:'}
        id={'first'}
        required={true}
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <FormField label={'Last Name:*'} id={'last'} value={lastName} onChange={(event) => setLastName(event.target.value)} required={true} />
      <FormField label={'Company:'} id={'company'} value={!company ? '' : company} onChange={(event) => setCompany(event.target.value)} />
      <FormField
        label={'Phone*:'}
        id={'phone'}
        required={true}
        value={phone}
        type="number"
        onChange={(event) => setPhone(event.target.value)}
      />
      <FormField
        label={'Email*:'}
        id={'email'}
        required={true}
        value={email}
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label className={styles.button_label} htmlFor="submit">
        Submit
      </label>
      <div className={styles.button_container}>
        <Button type={'submit'} isDisabled={loading} text={loading ? (success ? 'Sent!' : 'Loading...') : 'Submit'} title="submit" />
      </div>
      <Toaster position={'bottom-center'} />
    </form>
  );
};

export { Form };
