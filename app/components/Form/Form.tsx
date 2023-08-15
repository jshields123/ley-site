'use client';

import { FormField } from '../FormField';
import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { Button } from '../Button/Button';
import { IJsonResponse } from '../../../interfaces';

const Form = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(firstName, lastName, company, phone, email);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, company, phone, email }),
    });
    const { msg } = (await res.json()) as IJsonResponse;
    setError(msg);
    console.log(error);
  };

  return (
    //TODO: Need to look into this one... to see how we want to do this properly. tried using void handleSubmit but this breaks the promise
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField label={'First Name*:'} id={'first'} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <FormField label={'Last Name:'} id={'last'} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <FormField label={'Company:'} id={'company'} value={company} onChange={(e) => setCompany(e.target.value)} />
      <FormField label={'Phone*:'} id={'phone'} value={phone} type="number" onChange={(e) => setPhone(e.target.value)} />
      <FormField label={'Email*:'} id={'email'} value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
      <label className={styles.button_label} htmlFor="submit">
        Submit
      </label>
      <div className={styles.button_container}>
        <Button buttonText={'Submit'} type={'submit'} isDisabled={false} />
      </div>
    </form>
  );
};

export { Form };
