import styles from "./Footer.module.css";

interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps) => {
  return (
    <footer>
      <div className={styles.footer__text}>
        <p>&copy; {text}</p>
      </div>
    </footer>
  );
};

export { Footer };
