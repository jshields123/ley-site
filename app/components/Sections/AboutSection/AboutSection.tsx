import { TextCard } from "../../Cards";
import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about_container__wrapper}>
      <TextCard
        text={
          "Over 15 years experience working across the UK & Australia. I am a passionate relationship builder, recruiter, trainer and leader. My industry experience spans from global corporate, tech start-up to not-for-profit and healthcare; one thing remains consistent, my passion for people 💡"
        }
      />

      <Image
        className={styles.image}
        src={"/lauren-linkedin2.jpeg"}
        alt={"Lauren at work"}
        width={150}
        height={150}
      />
    </div>
  );
};

export { AboutSection };
