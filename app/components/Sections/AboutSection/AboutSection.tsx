import { Button } from '../../Button';
import { TextCard } from '../../Cards';
import { ABOUT_SECTION_SUBSCRIBE_LABEL, ABOUT_SECTION_TEXT } from './AboutSection.constants';
import styles from './AboutSection.module.css';
import Image from 'next/image';

const AboutSection = () => {
  const handleClicked = () => {
    window.open('https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7005725908439375873', '_blank');
  };

  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
        <div className={styles.about_image}>
          <Image className={styles.image} src={'/images/lauren-2.jpeg'} alt={'Lauren at work'} width={160} height={160} />
        </div>
        {ABOUT_SECTION_TEXT.map((text, key) => (
          <div className={styles.about_text} key={key}>
            <TextCard text={text} />
          </div>
        ))}
        <div className={styles.button__label}>
          <TextCard text={ABOUT_SECTION_SUBSCRIBE_LABEL} />
        </div>
        <div className={styles.button_container}>
          <Button title={'Subscribe'} type={'button'} isDisabled={false} text={'Subscribe'} onClick={handleClicked} />
        </div>
      </div>
    </div>
  );
};

export { AboutSection };
