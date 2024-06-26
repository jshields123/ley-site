import styles from './TertiaryTitle.module.css';
import { TertiaryTitleProps } from './TertiaryTitle.interfaces';

const TertiaryTitle = ({ text }: TertiaryTitleProps) => {
  return (
    <div className={styles.tertiary_title__container}>
      <h3 className={styles.tertiary_title}>{text}</h3>
    </div>
  );
};

export { TertiaryTitle };
