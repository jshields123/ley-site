export interface ButtonProps {
  type: 'button' | 'submit';
  isDisabled: boolean;
  onClick?: () => void;
  text: string;
  title: string;
}
