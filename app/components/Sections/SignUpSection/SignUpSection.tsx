import styles from './SignUpSection.module.css';
import { FormCard } from '../../Cards/FormCard/FormCard';
import { ImageOverlay } from '../../ImageOverlay';

const SignUpSection = () => {
  return (
    <>
      <ImageOverlay imageSrc={'/images/meeting.jpg'} alt={'business meeting'} type={'form'}>
        <div className={styles.overlay}>
          <FormCard />
        </div>
      </ImageOverlay>
    </>
  );
};

export { SignUpSection };
