import { Carousel } from '../../Carousel';
import styles from '../ReferralsSection/ReferralsSection.module.css';
import { TextCard } from '../../Cards';
import Image from 'next/image';

const ReferralsSection = () => {
  return (
    <div className={styles.referral_container}>
      <div className={styles.referral_content}>
        <div className={styles.referral_single}>
          <div className={styles.text}>
            <TextCard
              text={
                '"Thanks to Lauren, I transitioned seamlessly from redundancy to the role of Head of TA. Her expert guidance and strategic approach made all the difference. Truly grateful for a career coach who turns challenges into opportunities!"'
              }
            />
          </div>
          <div className={styles.image}>
            <Image className={styles.cass} src={'/images/cass_bw_2.jpeg'} alt={'cass'} width={140} height={140} />
          </div>
        </div>
        <div className={styles.referral_single}>
          <div className={styles.text}>
            <TextCard
              text={
                '"Working with Lauren was a career-changing experience. From being a low performer in sales, Lauren\'s personalised coaching and strategic insights turned things around for me. With her guidance, I not only improved my sales performance but clinched the title of Top Biller of the Quarter."'
              }
            />
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
