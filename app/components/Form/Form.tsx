import { FormField } from "../FormField";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form} action="/send-data-here" method="post">
      <FormField label="First Name*:" id="first" name="first" />
      <FormField label="Last Name:" id="last" name="last" />
      <FormField label="Company:" id="company" name="company" />
      <FormField label="Phone*:" id="phone" name="phone" type="number" />
      <FormField label="Email*:" id="email" name="email" type="email" />
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
