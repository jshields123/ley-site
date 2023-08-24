import styles from './SignUpSection.module.css';
import { FormCard } from '../../Cards/FormCard/FormCard';
import { ImageOverlay } from '../../ImageOverlay';

const SignUpSection = () => {
  return (
    <div className={styles.signup_container}>
      <ImageOverlay imageSrc={'/images/business-meeting.jpeg'} alt={'business meeting'} type={'form'}>
        <div className={styles.overlay}>
          <FormCard />
        </div>
      </ImageOverlay>
    </div>
  );
};

export { SignUpSection };
