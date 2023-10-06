import styles from './LowerNavbar.module.css';
import { NAVBAR_ITEMS } from '../../utils/common/constants/Navbar.constants';

const LowerNavbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {NAVBAR_ITEMS.map(({ id, linkHref, Icon, onClick }) => {
            return (
              <li key={id} className={styles.li}>
                {onClick ? (
                  <button
                    className={styles.link}
                    onClick={onClick}
                    style={{ border: 'none', background: 'none', padding: 0 }}
                    aria-name={id}
                  >
                    {Icon}
                  </button>
                ) : (
                  <a className={styles.link} href={linkHref} aria-label={id}>
                    {Icon}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export { LowerNavbar };
