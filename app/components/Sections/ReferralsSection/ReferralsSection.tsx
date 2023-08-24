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
            <TextCard text={'“Lauren is great and is a true expert in her field, she helped me get a job! Life Changer!”'} />
          </div>
          <div className={styles.image}>
            <Image
              className={styles.another_random_lady}
              src={'/images/another_random.jpeg'}
              alt={'random lady'}
              width={140}
              height={140}
            />
          </div>
        </div>
        <div className={styles.referral_single}>
          <div className={styles.text}>
            <TextCard
              text={
                '“Lauren has helped us multiple times to fill positions and always does with exceptional service and delivers results!”'
              }
            />
          </div>
          <div className={styles.text}>
            <Image className={styles.random_lady} src={'/images/random_lady.jpeg'} alt={'random lady'} width={140} height={140} />
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export { ReferralsSection };
