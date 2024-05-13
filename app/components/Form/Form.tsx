'use client';

import { FormEvent, useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '../Button/Button';
import { FormField } from '../FormField';

import styles from './Form.module.css';

import { IContact } from '../../interfaces/common';

const Form = () => {
  const [firstName, setFirstName] = useState<IContact['firstName']>('');
  const [lastName, setLastName] = useState<IContact['lastName']>('');
  const [company, setCompany] = useState<IContact['company']>('');
  const [phone, setPhone] = useState<IContact['phone']>('');
  const [email, setEmail] = useState<IContact['email']>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const contact: IContact = {
      firstName,
      lastName,
      email,
      phone,
      company,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ msg }: { msg: string }) => {
            // Explicitly type msg as string
            const errorMessage = msg || 'Unknown error'; // Handle undefined case
            console.log('error adding contact', errorMessage);
            throw new Error(errorMessage);
          });
        } else {
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((res) => {
        if (res.ok) {
          setFirstName('');
          setLastName('');
          setCompany('');
          setPhone('');
          setEmail('');
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
          return;
        } else {
          return res.json().then(({ msg }: { msg: string }) => {
            // Explicitly type msg as string
            const errorMessage = msg || 'Unknown error'; // Handle undefined case
            setError(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast('Error', { position: 'bottom-center' });
      })
      .finally(() => {
        setLoading(false);
        toast('Details sent successfully', { position: 'bottom-center' });
      });
  };

  return (
    <form className={styles.form} role="form" onSubmit={handleSubmit}>
      <FormField
        id={'first'}
        label={'First Name*:'}
        required={true}
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <FormField id={'last'} label={'Last Name:*'} required={true} value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <FormField id={'company'} label={'Company:'} value={!company ? '' : company} onChange={(event) => setCompany(event.target.value)} />
      <FormField
        id={'phone'}
        label={'Phone*:'}
        required={true}
        type="number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <FormField
        id={'email'}
        label={'Email*:'}
        required={true}
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label className={styles.button_label} htmlFor="submit">
        Submit
      </label>
      <div className={styles.recaptcha}>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />
      </div>
      <div className={styles.button_container}>
        <Button isDisabled={loading} text={loading ? (success ? 'Sent!' : 'Loading...') : 'Submit'} title="submit" type={'submit'} />
      </div>
      <Toaster position={'bottom-center'} />
    </form>
  );
};

export { Form };
