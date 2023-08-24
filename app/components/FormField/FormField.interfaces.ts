export interface FormFieldProps {
  label: string;
  id: string;
  value: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
