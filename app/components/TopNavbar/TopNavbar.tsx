import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import styles from './TopNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/constants/Navbar.constants';

interface TopNavbarProps {
  isMobile: boolean;
}

const TopNavbar = ({ isMobile }: TopNavbarProps) => {
  return (
    <div>
      <nav className={styles.nav}>
        {isMobile ? (
          <Logo />
        ) : (
          <>
            <Logo />
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
          </>
        )}
      </nav>
    </div>
  );
};

export { TopNavbar };
