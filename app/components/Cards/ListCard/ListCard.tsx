import { Card } from '../Card';
import styles from './ListCard.module.css';
import { ListCardItem } from './ListCard.constants';

interface ListCardProps {
  items: ListCardItem[];
}

const ListCard = ({ items }: ListCardProps) => {
  return (
    <Card>
      <div className={styles.text__container}>
        <ul>
          {items.map((item, key) => (
            <li className={styles.list_items} key={key}>
              <strong>{item.point}</strong> {item.explanation}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export { ListCard };
