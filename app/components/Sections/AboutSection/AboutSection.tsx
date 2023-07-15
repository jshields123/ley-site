import { TextCard } from "../../Cards";
import { SubTitle } from "../../SubTitle";
import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__title}>
        <SubTitle text={"About"} />
      </div>
      <div className={styles.about_content}>
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
    </div>
  );
};

export { AboutSection };
