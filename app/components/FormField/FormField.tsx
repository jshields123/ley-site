import styles from './FormField.module.css';
import { FormFieldProps } from './FormField.interfaces';

const FormField = ({ label, id, value, type = 'text', onChange, required }: FormFieldProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} id={id} value={value} onChange={onChange} required={required} />
    </>
  );
};

export { FormField };
