import Link from "next/link";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.interfaces";
import { NAVBAR_ITEMS } from "./Navbar.constants";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.ul}>
          {NAVBAR_ITEMS.map(({ linkHref, Icon }) => {
            return (
              <li key={linkHref} className={styles.li}>
                <Link
                  className={styles.link}
                  href={linkHref}
                  rel="icon"
                  type=""
                >
                  {Icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
