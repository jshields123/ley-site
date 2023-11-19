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
                '"Thanks to Lauren, I transitioned seamlessly from redundancy to the role of Head of TA. Their expert guidance and strategic approach made all the difference. Grateful for a career coach who turns challenges into opportunities!"'
              }
            />
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
                '"Working with Lauren was a career-changing experience. From being a low performer in sales, Lauren\'s personalised coaching and strategic insights turned things around for me. With her guidance, I not only improved my sales performance but clinched the title of Top Biller of the Quarter."'
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
