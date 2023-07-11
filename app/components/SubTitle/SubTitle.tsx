import styles from "./SubTitle.module.css";

interface SubTitleProps {
  text: string;
}

const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <div className={styles.subtitle__container}>
      <h3 className={styles.subtitle__text}>{text}</h3>
    </div>
  );
};

export { SubTitle };
