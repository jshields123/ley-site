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
      <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
    </Card>
  );
};

export { ImageCard };
