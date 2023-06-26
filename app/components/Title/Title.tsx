import styles from "./Title.module.css";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className={styles.title__container}>
      <h2 className={styles.title__text}>{text}</h2>
    </div>
  );
};

export { Title };
