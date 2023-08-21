import styles from "./ImageOverlay.module.css";
import { ReactNode } from "react";
import Image from "next/image";

const isMobile = window.matchMedia('(max-width: 768px)').matches;


interface ImageOverlayProps {
  children: string | ReactNode;
  imageSrc: string;
  alt: string;
  type: string;
}

const ImageOverlay = ({ children, imageSrc, alt, type }: ImageOverlayProps) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <div className={styles.container}>
      <Image src={imageSrc} alt={alt} fill className={`${type}__image`} />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
