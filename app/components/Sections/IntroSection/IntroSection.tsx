import styles from "../IntroSection/IntroSection.module.css";
import { ImageOverlay } from "../../ImageOverlay/ImageOverlay";
import { Logo } from "../../Logo/Logo";
import { Title } from "../../Title/Title";
import { SubTitle } from "../../SubTitle";
import { Button } from "../../Button/Button";

const IntroSection = () => {
  const onClick = () => {
    window.open("tel:+610431471512");
  };
  return (
    <>
      <ImageOverlay imageSrc={"/lauren1.jpeg"} alt={"lauren"} type={"intro"}>
        <div className={styles.overlay}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Title text={"LEY Consulting"} />
          <SubTitle text={"Empowering Professionals, Elevating Businesses"} />
          <Button
            buttonText={"Call now"}
            type={"button"}
            isDisabled={false}
            onClick={onClick}
          />
        </div>
      </ImageOverlay>
    </>
  );
};

export { IntroSection };
