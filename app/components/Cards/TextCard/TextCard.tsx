import styles from "./TextCard.module.css";
import { Card } from "../Card";

interface TextCardProps {
  text: string;
}

const TextCard = ({ text }: TextCardProps) => {
  return (
    <Card>
      <div className={styles.image__container}>
        <p>{text}</p>
      </div>
    </Card>
  );
};

export { TextCard };
