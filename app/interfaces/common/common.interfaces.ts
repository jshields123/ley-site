import { ReactNode } from 'react';

export interface IUser {
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface NavbarItem {
  id: string;
  linkHref?: string;
  Icon: ReactNode;
  onClick?: () => void;
}
