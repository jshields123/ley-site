import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <NavBar />
    </div>
  );
};

export { Header };
