"use client";

import { FormField } from "../FormField";
import styles from "./Form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        label={"First Name*:"}
        id={"first"}
        name={"first"}
        handleChange={handleChange}
      />
      <FormField
        label={"Last Name:"}
        id={"last"}
        name={"last"}
        handleChange={handleChange}
      />
      <FormField
        label={"Company:"}
        id={"company"}
        name="company"
        handleChange={handleChange}
      />
      <FormField
        label={"Phone*:"}
        id={"phone"}
        name="phone"
        type="number"
        handleChange={handleChange}
      />
      <FormField
        label={"Email*:"}
        id={"email"}
        name={"email"}
        type="email"
        handleChange={handleChange}
      />
      <label className={styles.button_label} htmlFor="submit">
        Submit
      </label>
      <button className={styles.form_button} type="submit">
        Submit
      </button>
    </form>
  );
};

export { Form };
