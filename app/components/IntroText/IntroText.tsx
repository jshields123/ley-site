import styles from "../IntroText/IntroText.module.css";

const IntroText = () => {
  return (
    <div className={styles.intro_text__wrapper}>
      <p className={styles.intro_text}></p>
    </div>
  );
};

export { IntroText };
