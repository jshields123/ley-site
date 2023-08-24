import styles from './SubTitle.module.css';
import { SubTitleProps } from './SubTitle.interfaces';

const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <div className={styles.subtitle__container}>
      <h2 className={styles.subtitle__text}>{text}</h2>
    </div>
  );
};

export { SubTitle };
