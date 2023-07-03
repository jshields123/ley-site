import styles from "./ImageCard.module.css";
import Image from "next/image";
import { Card } from "../Card";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

const ImageCard = ({ imageSrc, imageAlt }: ImageCardProps) => {
  return (
    <Card>
      <div className={styles.image__container}>
        <Image src={imageSrc} alt={imageAlt} width={150} height={150} />
      </div>
    </Card>
  );
};

export { ImageCard };
