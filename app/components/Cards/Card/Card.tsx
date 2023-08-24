import styles from './Card.module.css';
import { CardProps } from './Card.interfaces';

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export { Card };
