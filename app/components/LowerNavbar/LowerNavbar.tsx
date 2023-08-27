import Link from 'next/link';
import styles from './LowerNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/constants/Navbar.constants';

const LowerNavbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {NAVBAR_ITEMS.map(({ linkHref, Icon }) => {
            return (
              <li key={linkHref} className={styles.li}>
                <Link className={styles.link} href={linkHref}>
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

export { LowerNavbar };
