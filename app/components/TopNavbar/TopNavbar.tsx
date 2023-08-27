import { Logo } from '../Logo/Logo';
import styles from './TopNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/common/constants/Navbar.constants';

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
              {NAVBAR_ITEMS.map(({ id, linkHref, Icon, onClick }) => {
                return (
                  <li key={id} className={styles.li}>
                    <a className={styles.link} href={linkHref} onClick={onClick}>
                      {Icon}
                    </a>
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
