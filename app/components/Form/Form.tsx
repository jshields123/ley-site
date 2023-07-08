import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form} action="/send-data-here" method="post">
      <label className={styles.label} htmlFor="first">
        First Name*:
      </label>
      <input className={styles.input} type="text" id="first" name="first" />
      <label className={styles.label} htmlFor="last">
        Last Name:
      </label>
      <input className={styles.input} type="text" id="last" name="last" />
      <label className={styles.label} htmlFor="company">
        Company:
      </label>
      <input className={styles.input} type="text" id="company" name="company" />
      <label className={styles.label} htmlFor="phone">
        Phone*:
      </label>
      <input className={styles.input} type="number" id="phone" name="phone" />
      <label className={styles.label} htmlFor="phone">
        Email*:
      </label>
      <input className={styles.input} type="email" id="email" name="email" />
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
