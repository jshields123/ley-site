import styles from '../Button/Button.module.css';

interface ButtonProps {
  buttonText: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled: boolean;
  onClick?: () => void;
}

const Button = ({ buttonText, type, isDisabled = false, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export { Button };
