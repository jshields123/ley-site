import { Carousel } from '../../Carousel';
import styles from '../ReferralsSection/ReferralsSection.module.css';
import { TextCard } from '../../Cards';
import Image from 'next/image';
import { REFERRAL_SECTION_QUOTES } from './ReferralSection.constants';

const ReferralsSection = () => {
  return (
    <div className={styles.referral_container}>
      <div className={styles.referral_content}>
        <div className={styles.referral_single}>
          <div className={styles.text}>
            <TextCard text={REFERRAL_SECTION_QUOTES.cass} />
          </div>
          <div className={styles.image}>
            <Image className={styles.cass} src={'/images/cass_bw_2.jpeg'} alt={'cass'} width={140} height={140} />
          </div>
        </div>
        <div className={styles.referral_single}>
          <div className={styles.text}>
            <TextCard text={REFERRAL_SECTION_QUOTES.jordan} />
          </div>
          <div className={styles.text}>
            <Image className={styles.jordan} src={'/images/jord_bw_2.jpeg'} alt={'jordan'} width={140} height={140} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReferralsSection };
