"use client";

import { FormField } from "../FormField";

import styles from "./Form.module.css";
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";

const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(firstName, lastName, company, phone, email);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, company, phone, email }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        label={"First Name*:"}
        id={"first"}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FormField
        label={"Last Name:"}
        id={"last"}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <FormField
        label={"Company:"}
        id={"company"}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <FormField
        label={"Phone*:"}
        id={"phone"}
        value={phone}
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <FormField
        label={"Email*:"}
        id={"email"}
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className={styles.button_label} htmlFor="submit">
        Submit
      </label>
      <Button buttonText={"Submit"} type={"submit"} isDisabled={false}></Button>
    </form>
  );
};

export { Form };
