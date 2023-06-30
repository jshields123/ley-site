import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <h2 className={styles.logo}>LEY </h2>
    </div>
  );
};

export { Logo };
