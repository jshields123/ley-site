import { ReactNode } from 'react';

export interface NavbarItem {
  id: string;
  linkHref?: string;
  Icon: ReactNode;
  onClick?: () => void;
}

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  createdAt?: Date;
}
