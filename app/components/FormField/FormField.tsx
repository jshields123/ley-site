import styles from "./FormField.module.css";

export interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  handleChange,
}: FormFieldProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export { FormField };
