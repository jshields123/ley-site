import styles from "./HeroImage.module.css";
import Image from "next/image";

interface HeroImageProps {
  imageSrc: string;
  imageAlt: string;
}

const HeroImage = ({ imageSrc, imageAlt }: HeroImageProps) => {
  return (
    <div className={styles.hero}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={styles.hero__image}
      />
    </div>
  );
};

export { HeroImage };
