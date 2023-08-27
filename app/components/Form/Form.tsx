'use client';

import { FormField } from '../FormField';

import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { Button } from '../Button/Button';

const Form = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    console.log(firstName, lastName, company, phone, email);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, company, phone, email }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
    setLoading(false);
    if (res.ok) {
      setFirstName('');
      setLastName('');
      setCompany('');
      setPhone('');
      setEmail('');
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField label={'First Name*:'} id={'first'} value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <FormField label={'Last Name:'} id={'last'} value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <FormField label={'Company:'} id={'company'} value={company} onChange={(event) => setCompany(event.target.value)} />
      <FormField label={'Phone*:'} id={'phone'} value={phone} type="number" onChange={(event) => setPhone(event.target.value)} />
      <FormField label={'Email*:'} id={'email'} value={email} type="email" onChange={(event) => setEmail(event.target.value)} />
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
