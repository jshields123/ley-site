import styles from './Title.module.css';

import { TitleProps } from './Title.interfaces';

const Title = ({ text }: TitleProps) => {
  return (
    <div className={styles.title__container}>
      <h1 className={styles.title__text}>{text}</h1>
    </div>
  );
};

export { Title };
