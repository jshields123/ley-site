import styles from './TextCard.module.css';
import { Card } from '../Card';

interface TextCardProps {
  text: string;
}

const TextCard = ({ text }: TextCardProps) => {
  return (
    <Card>
      <div className={styles.text__container}>
        <p className={styles.text}>{text}</p>
      </div>
    </Card>
  );
};

export { TextCard };
