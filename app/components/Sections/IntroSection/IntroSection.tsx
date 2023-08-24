import styles from '../IntroSection/IntroSection.module.css';
import { ImageOverlay } from '../../ImageOverlay/ImageOverlay';
import { Title } from '../../Title/Title';
import { SubTitle } from '../../SubTitle';
import { Button } from '../../Button/Button';
import { Navbar } from '../../Navbar/Navbar';
import { TertiaryTitle } from '../../TertiaryTitle';
import { useEffect, useState } from 'react';

const IntroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const newIsMobile = window.innerWidth <= 768;
    setIsMobile(newIsMobile);
  }, []);
  const onClick = () => {
    window.open('tel:+610431471512');
  };
  return (
    <div className={styles.intro_container}>
      <ImageOverlay imageSrc={'/images/lauren1.jpeg'} alt={'lauren'} type={'intro'} shouldHavePriority={true} isMobile={isMobile}>
        <div className={styles.overlay}>
          <div className={styles.nav}>
            <Navbar />
          </div>
          <div className={styles.intro_text}>
            <Title text={'LEY Consulting'} />
            <SubTitle text={'Empowering Professionals, Elevating Businesses'} />
            <TertiaryTitle text={'Your trusted partner for recruitment services, sales consulting and HR software consulting'} />
            <div className={styles.button}>
              <Button buttonText={'Call now'} type={'button'} isDisabled={false} onClick={onClick} />
            </div>
          </div>
        </div>
      </ImageOverlay>
    </div>
  );
};

export { IntroSection };
