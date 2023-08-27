import styles from './Button.module.css';
import { ButtonProps } from './Button.interfaces';

const Button = ({ children, type, isDisabled = false, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
