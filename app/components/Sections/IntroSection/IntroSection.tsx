import styles from '../IntroSection/IntroSection.module.css';
import { ImageOverlay } from '../../ImageOverlay/ImageOverlay';
import { Title } from '../../Title/Title';
import { SubTitle } from '../../SubTitle';
import { Button } from '../../Button/Button';
import { TopNavbar } from '../../TopNavbar/TopNavbar';
import { TertiaryTitle } from '../../TertiaryTitle';
import { useEffect, useState } from 'react';
import { LowerNavbar } from '../../LowerNavbar';
import { onClickToCall } from '@/app/utils/common/functions/onClickToCall';

const IntroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const newIsMobile = window.innerWidth <= 768;
    setIsMobile(newIsMobile);
  }, []);

  return (
    <div className={styles.intro_container}>
      <ImageOverlay imageSrc={'/images/lauren1.jpeg'} alt={'lauren'} type={'intro'} shouldHavePriority={true} isMobile={isMobile}>
        <div className={styles.overlay}>
          <div className={styles.nav}>
            <TopNavbar isMobile={isMobile} />
          </div>
          <div className={styles.intro_text}>
            <Title text={'LEY Consulting'} />
            <SubTitle text={'Empowering Professionals, Elevating Businesses'} />
            <TertiaryTitle text={'Sales & Career Coach | Author of #TalentBites | Delivering Short & Relevant Talent Insights'} />
            <div className={styles.button}>
              <Button type={'button'} isDisabled={false} onClick={onClickToCall}>
                {'Call now'}
              </Button>
            </div>
          </div>
        </div>
      </ImageOverlay>
      {isMobile ? <LowerNavbar /> : <></>}
    </div>
  );
};

export { IntroSection };
