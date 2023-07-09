import styles from "./ImageOverlay.module.css";
import { HeroImage } from "../HeroImage";
import { ReactNode } from "react";

interface ImageOverlayProps {
  children: string | ReactNode;
  imageSrc: string;
}

const ImageOverlay = ({ children, imageSrc }: ImageOverlayProps) => {
  return (
    <div className={styles.container}>
      <HeroImage imageSrc={imageSrc} imageAlt={"Lauren"} />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
