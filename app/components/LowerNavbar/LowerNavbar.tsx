import Link from 'next/link';
import styles from './LowerNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/common/constants/Navbar.constants';

const LowerNavbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {NAVBAR_ITEMS.map(({ id, onClick, linkHref, Icon }) => {
            return (
              <li key={id} className={styles.li}>
                <a className={styles.link} href={linkHref} onClick={onClick}>
                  {Icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { LowerNavbar };
