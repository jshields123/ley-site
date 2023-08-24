import styles from './ImageOverlay.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

interface ImageOverlayProps {
  alt: string;
  children: string | ReactNode;
  imageSrc: string;
  isMobile?: boolean;
  shouldHavePriority?: boolean;
  type: string;
}

const ImageOverlay = ({ children, imageSrc, alt, type, shouldHavePriority, isMobile }: ImageOverlayProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={isMobile ? undefined : true}
        className={`${type}__image`}
        priority={shouldHavePriority ? true : undefined}
        height={isMobile ? 333 : undefined}
        width={isMobile ? 500 : undefined}
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
