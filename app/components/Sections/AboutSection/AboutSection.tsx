import { TextCard } from "../../Cards";
import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about_container__wrapper}>
      <TextCard
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,officia iure saepe voluptatem temporibus, praesentium ad unde possimusquis earum aspernatur, alias dolorem? Reprehenderit dolorum laudantiumfuga expedita, ducimus impedit?"
        }
      />

      <Image
        src={"/lauren-linkedin2.jpeg"}
        alt={"Lauren at work"}
        width={150}
        height={150}
      />
    </div>
  );
};

export { AboutSection };
