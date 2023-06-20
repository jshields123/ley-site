import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navbar_item}>
          <a href="/about">About</a>
        </li>
        <li className={styles.navbar_item}>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
