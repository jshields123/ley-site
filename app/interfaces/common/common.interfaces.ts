import { ReactNode } from 'react';

export interface NavbarItem {
  id: string;
  linkHref?: string;
  Icon: ReactNode;
  onClick?: () => void;
}
