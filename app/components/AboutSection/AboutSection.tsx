import { TextCard, ImageCard } from "../Cards";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.about_container__wrapper}>
      <div className={styles.text}>
        <TextCard
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,officia iure saepe voluptatem temporibus, praesentium ad unde possimusquis earum aspernatur, alias dolorem? Reprehenderit dolorum laudantiumfuga expedita, ducimus impedit?"
          }
        />
      </div>
      <div className={styles.about_image}>
        <ImageCard
          imageSrc={"/lauren-linkedin2.jpeg"}
          imageAlt={"Lauren at work"}
        />
      </div>
    </div>
  );
};

export { AboutSection };
