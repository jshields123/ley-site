import styles from "./ImageOverlay.module.css";
import { ReactNode } from "react";
import Image from "next/image";

interface ImageOverlayProps {
  children: string | ReactNode;
  imageSrc: string;
  alt: string;
  type: string;
}

const ImageOverlay = ({ children, imageSrc, alt, type }: ImageOverlayProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={alt}
        width={1050}
        height={700}
        className={`${type}__image`}
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
