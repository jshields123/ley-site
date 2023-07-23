import { TextCard } from "../../Cards";
import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
        <div className={styles.about_image}>
          <Image
            className={styles.image}
            src={"/images/lauren-linkedin2.jpeg"}
            alt={"Lauren at work"}
            width={160}
            height={160}
          />
        </div>
        <div className={styles.about_text}>
          <TextCard
            text={
              "Over 15 years experience working across the UK & Australia. I am a passionate relationship builder, recruiter, trainer and leader. My industry experience spans from global corporate, tech start-up to not-for-profit and healthcare; one thing remains consistent, my passion for people"
            }
          />
        </div>
      </div>
    </div>
  );
};

export { AboutSection };
