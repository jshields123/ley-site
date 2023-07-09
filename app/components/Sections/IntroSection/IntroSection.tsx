import styles from "../IntroSection/IntroSection.module.css";
import { ImageOverlay } from "../../ImageOverlay/ImageOverlay";
import { Logo } from "../../Logo/Logo";
import { Title } from "../../Title/Title";

const IntroSection = () => {
  return (
    <div className={styles.intro_container__wrapper}>
      <ImageOverlay imageSrc={"/lauren1.jpeg"}>
        <div className={styles.overlay}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Title text={"LEY Consulting"} />
          <p className={styles.subtext}>
            Empowering Professionals, Elevating Businesses
          </p>
        </div>
      </ImageOverlay>
    </div>
  );
};

export { IntroSection };
