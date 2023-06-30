import styles from "../IntroText/IntroText.module.css";
import { ImageOverlay } from "../ImageOverlay/ImageOverlay";

const IntroSection = () => {
  return (
    <div className={styles.intro_container__wrapper}>
      <ImageOverlay />
    </div>
  );
};

export { IntroSection };
