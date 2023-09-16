'use client';

import { FormField } from '../FormField';
import { IContact } from '../../interfaces/common';

import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { Button } from '../Button/Button';

const Form = () => {
  const [firstName, setFirstName] = useState<IContact['firstName']>('');
  const [lastName, setLastName] = useState<IContact['lastName']>('');
  const [company, setCompany] = useState<IContact['company']>();
  const [phone, setPhone] = useState<IContact['phone']>('');
  const [email, setEmail] = useState<IContact['email']>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID; // Replace with your spreadsheet ID
    const range = 'Sheet1!A1:E1'; // Specify the range where you want to append data
    const valueInputOption = 'RAW'; // Choose an appropriate valueInputOption (e.g., RAW, USER_ENTERED)
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // Paste your API key here
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/11BGL3T6sqrvtUdNKveqI-KnGE59N3QYkpJ2Ht5CHWd4/values/${range}:append?valueInputOption=${valueInputOption}&key=AIzaSyBi5Vix_LqvDEeJY52MLwQDygP2GsLiyqg`;

    // Define the data you want to append
    const rowData = [
      ['TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5'], // Replace with your data
    ];

    // Define the request body
    const requestBody = {
      values: rowData,
    };
    const contact: IContact = {
      firstName,
      lastName,
      email,
      phone,
      company,
    };

    console.log(firstName, lastName, company, phone, email);

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
        console.log('email sent');

        try {
          const res = await fetch(appendUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        const { msg } = await res.json();
        setError(msg);
        console.log('error sending email');
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
        <Button type={'submit'} isDisabled={false}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export { Form };
