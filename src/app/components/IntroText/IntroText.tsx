import styles from "../IntroText/IntroText.module.css";

const IntroText = () => {
  return (
    <div className={styles.intro_text__wrapper}>
      <p className={styles.intro_text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        unde quasi eveniet accusamus praesentium. Provident sed quasi id dolorum
        aperiam dolore adipisci excepturi, vel, ullam odit molestiae doloribus
        distinctio ipsum?
      </p>
    </div>
  );
};

export default IntroText;
