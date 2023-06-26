import styles from "./ImageOverlay.module.css";
import { HeroImage } from "../HeroImage";
import { Title } from "../Title";

const ImageOverlay = () => {
  return (
    <div className={styles.container}>
      <HeroImage />
      <div className={styles.overlay}>
        <Title text={"LEY Consulting"} />
        <p className={styles.subtext}>
          Empowering Professionals, Elevating Businesses
        </p>
      </div>
    </div>
  );
};

export { ImageOverlay };
