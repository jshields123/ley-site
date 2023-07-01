import styles from "./Card.module.css";
import { ReactNode } from "react";

interface CardProps {
  children: string | ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export { Card };
