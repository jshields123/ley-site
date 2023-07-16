import styles from "./FormField.module.css";

export interface FormFieldProps {
  label: string;
  id: string;
  value: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  value,
  type = "text",
  onChange,
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
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { FormField };
