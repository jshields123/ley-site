import { Button } from '../../Button';
import { TextCard } from '../../Cards';
import { ABOUT_SECTION_TEXT } from './AboutSection.constants';
import styles from './AboutSection.module.css';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
        <div className={styles.about_image}>
          <Image className={styles.image} src={'/images/lauren-2.jpeg'} alt={'Lauren at work'} width={160} height={160} />
        </div>
        <div className={styles.about_text}>
          <TextCard text={ABOUT_SECTION_TEXT} />
        </div>
        <div className={styles.button_container}>
          <Button children={'Subscribe'} type={'button'} isDisabled={false} />
        </div>
      </div>
    </div>
  );
};

export { AboutSection };
