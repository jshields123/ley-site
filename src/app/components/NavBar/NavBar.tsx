import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
