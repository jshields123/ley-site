import { NavBar } from "../NavBar";
import { Title } from "../Title";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title />
      <NavBar />
    </div>
  );
};

export { Header };
