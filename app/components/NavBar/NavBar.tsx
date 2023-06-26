import styles from "./NavBar.module.css";
import Link from "next/link";
import { Title } from "../Title/Title";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Title text={"LEY"} />
      </div>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
