import styles from './Button.module.css';
import { ButtonProps } from './Button.interfaces';

const Button = ({ buttonText, type, isDisabled = false, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export { Button };
