import styles from "../IntroText/IntroText.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about_container__wrapper}>
      <div className={styles.about_image}>{/* <Image /> */}</div>
      <div className={styles.about_container__text}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
          officia iure saepe voluptatem temporibus, praesentium ad unde possimus
          quis earum aspernatur, alias dolorem? Reprehenderit dolorum laudantium
          fuga expedita, ducimus impedit?
        </p>
      </div>
    </div>
  );
};

export { AboutSection };
