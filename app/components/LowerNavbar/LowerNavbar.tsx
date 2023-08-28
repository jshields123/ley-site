import styles from './LowerNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/common/constants/Navbar.constants';

const LowerNavbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {NAVBAR_ITEMS.map(({ id, linkHref, Icon, onClick }) => {
            return (
              <li key={id} className={styles.li}>
                {onClick ? (
                  <button className={styles.link} onClick={onClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                    {Icon}
                  </button>
                ) : (
                  <a className={styles.link} href={linkHref}>
                    {Icon}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { LowerNavbar };
