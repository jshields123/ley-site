import styles from "../IntroSection/IntroSection.module.css";
import { ImageOverlay } from "../../ImageOverlay/ImageOverlay";
import { Logo } from "../../Logo/Logo";
import { Title } from "../../Title/Title";
import { SubTitle } from "../../SubTitle";

const IntroSection = () => {
  return (
    <div className={styles.intro_container__wrapper}>
      <ImageOverlay imageSrc={"/lauren1.jpeg"} alt={"lauren"} type={"intro"}>
        <div className={styles.overlay}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Title text={"LEY Consulting"} />
          <SubTitle text={"Empowering Professionals, Elevating Businesses"} />
        </div>
      </ImageOverlay>
    </div>
  );
};

export { IntroSection };
