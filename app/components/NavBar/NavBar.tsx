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
          <Link href="/" className={styles.links}>
            Home
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/about" className={styles.links}>
            About
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/contact" className={styles.links}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
