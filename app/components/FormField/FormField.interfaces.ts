export interface FormFieldProps {
  label: string;
  required?: boolean;
  id: string;
  value: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
