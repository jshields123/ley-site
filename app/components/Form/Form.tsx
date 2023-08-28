'use client';

import { FormField } from '../FormField';
import { IUser } from '../../interfaces/common/common.interfaces';

import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { Button } from '../Button/Button';
// import { autoSendAdminNewContactEmail } from '../../api/contact/autoSendAdminNewContactEmail';
// import { autoSendWelcomeEmailToUser } from '../../api/contact/autoSendNewUserEmail';

const Form = () => {
  const [firstName, setFirstName] = useState<IUser['firstName']>('');
  const [lastName, setLastName] = useState<IUser['lastName']>('');
  const [company, setCompany] = useState<IUser['company']>('');
  const [phone, setPhone] = useState<IUser['phone']>('');
  const [email, setEmail] = useState<IUser['email']>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const user: IUser = {
      firstName,
      lastName,
      email,
      phone,
      company,
    };

    console.log(firstName, lastName, company, phone, email);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        // await autoSendWelcomeEmailToUser(user);
        // await autoSendAdminNewContactEmail(user);

        setFirstName('');
        setLastName('');
        setCompany('');
        setPhone('');
        setEmail('');
      } else {
        const { msg } = await res.json();
        setError(msg);
        console.log('error adding details to db');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        label={'First Name*:'}
        id={'first'}
        required={true}
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <FormField label={'Last Name:'} id={'last'} value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <FormField label={'Company:'} id={'company'} value={company} onChange={(event) => setCompany(event.target.value)} />
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
        <Button type={'submit'} isDisabled={false}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export { Form };
