import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
}

const FormField = ({ label, id, name, type = "text" }: FormFieldProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} id={id} name={name} />
    </>
  );
};

export { FormField };
