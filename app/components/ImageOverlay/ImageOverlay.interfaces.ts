import { ReactNode } from 'react';

export interface ImageOverlayProps {
  alt: string;
  children: string | ReactNode;
  imageSrc: string;
  isMobile?: boolean;
  shouldHavePriority?: boolean;
  type: string;
}
