export interface ButtonProps {
  buttonText: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled: boolean;
  onClick?: () => void;
}
