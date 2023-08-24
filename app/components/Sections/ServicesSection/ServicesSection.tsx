import { TextCard } from '../../Cards';
import { ListCard } from '../../Cards/ListCard/ListCard';
import { SubTitle } from '../../SubTitle';
import styles from './ServicesSection.module.css';
import { CONSULTING_LIST_ITEMS, RECRUITMENT_LIST_ITEMS, TRAINING_LIST_ITEMS } from '../../Cards/ListCard/ListCard.constants';

const ServicesSection = () => {
  return (
    <div className={styles.services__container}>
      <div className={styles.recruitment__container}>
        <SubTitle text={'Recruitment'} />
        <ListCard items={RECRUITMENT_LIST_ITEMS} />
      </div>
      <div className={styles.training__container}>
        <SubTitle text={'Training'} />
        <ListCard items={TRAINING_LIST_ITEMS} />
      </div>
      <div className={styles.consulting__container}>
        <SubTitle text={'Consulting'} />
        <ListCard items={CONSULTING_LIST_ITEMS} />
      </div>
    </div>
  );
};

export { ServicesSection };
