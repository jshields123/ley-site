import { ListCard } from '../../Cards/ListCard/ListCard';
import { SubTitle } from '../../SubTitle';
import styles from './ServicesSection.module.css';
import {
  BUSINESS_CONSULTING_LIST_ITEMS,
  SALES_COACHING_LIST_ITEMS,
  CAREER_COACHING_LIST_ITEMS,
} from '../../Cards/ListCard/ListCard.constants';

const ServicesSection = () => {
  return (
    <div className={styles.services__container}>
      <div className={styles.recruitment__container}>
        <SubTitle text={'Sales Coaching'} />
        <ListCard items={SALES_COACHING_LIST_ITEMS} />
      </div>
      <div className={styles.training__container}>
        <SubTitle text={'Career Coaching'} />
        <ListCard items={CAREER_COACHING_LIST_ITEMS} />
      </div>
      <div className={styles.consulting__container}>
        <SubTitle text={'Business Consulting'} />
        <ListCard items={BUSINESS_CONSULTING_LIST_ITEMS} />
      </div>
    </div>
  );
};

export { ServicesSection };
