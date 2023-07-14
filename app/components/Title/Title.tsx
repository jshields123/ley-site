import styles from "./Title.module.css";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className={styles.title__container}>
      <h1 className={styles.title__text}>{text}</h1>
    </div>
  );
};

export { Title };
