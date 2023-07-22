import styles from "../IntroSection/IntroSection.module.css";
import { ImageOverlay } from "../../ImageOverlay/ImageOverlay";
import { Title } from "../../Title/Title";
import { SubTitle } from "../../SubTitle";
import { Button } from "../../Button/Button";
import { Navbar } from "../../Navbar/Navbar";

const IntroSection = () => {
  const onClick = () => {
    window.open("tel:+610431471512");
  };
  return (
    <>
      <ImageOverlay imageSrc={"/lauren1.jpeg"} alt={"lauren"} type={"intro"}>
        <div className={styles.overlay}>
          <div className={styles.nav}>
            <Navbar />
          </div>
          <div className={styles.intro_text}>
            <Title text={"LEY Consulting"} />
            <SubTitle text={"Empowering Professionals, Elevating Businesses"} />
            <div className={styles.button}>
              <Button
                buttonText={"Call now"}
                type={"button"}
                isDisabled={false}
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </ImageOverlay>
    </>
  );
};

export { IntroSection };
