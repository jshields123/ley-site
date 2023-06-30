import styles from "./HeroImage.module.css";
import Image from "next/image";
const HeroImage = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={"/lauren.jpeg"}
        alt="Lauren"
        fill
        className={styles.hero__image}
      />
    </div>
  );
};

export { HeroImage };
