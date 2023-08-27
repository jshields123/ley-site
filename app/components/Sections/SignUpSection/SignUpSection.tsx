import styles from './SignUpSection.module.css';
import { FormCard } from '../../Cards/FormCard/FormCard';
import { ImageOverlay } from '../../ImageOverlay';
import { useState, useEffect } from 'react';

const SignUpSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const newIsMobile = window.innerWidth <= 768;
    setIsMobile(newIsMobile);
  }, []);

  return (
    <div className={styles.signup_container}>
      {isMobile ? (
        <FormCard />
      ) : (
        <ImageOverlay imageSrc={'/images/business-meeting.jpeg'} alt={'business meeting'} type={'form'}>
          <div className={styles.overlay}>
            <FormCard />
          </div>
        </ImageOverlay>
      )}
    </div>
  );
};

export { SignUpSection };
