import styles from './SubTitle.module.css';

interface SubTitleProps {
  text: string;
}

const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <div className={styles.subtitle__container}>
      <h2 className={styles.subtitle__text}>{text}</h2>
    </div>
  );
};

export { SubTitle };
