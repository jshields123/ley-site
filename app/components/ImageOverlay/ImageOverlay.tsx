import styles from "./ImageOverlay.module.css";
import { HeroImage } from "../HeroImage";
import { ReactNode } from "react";

interface ImageOverlayProps {
  children: string | ReactNode;
}

const ImageOverlay = ({ children }: ImageOverlayProps) => {
  return (
    <div className={styles.container}>
      <HeroImage imageSrc={"/lauren.jpeg"} imageAlt={"Lauren"} />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
