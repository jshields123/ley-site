export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  isDisabled: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
