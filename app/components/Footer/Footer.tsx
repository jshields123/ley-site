import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__text}>
        <p>&copy; 2023 LEY Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
