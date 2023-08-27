import { ReactNode } from 'react';
import PhoneIcon from '../../components/Icons/PhoneIcon';
import EmailIcon from '../../components/Icons/EmailIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../components/Icons/LinkedInIcon';

interface NavbarItem {
  linkHref: string;
  Icon: ReactNode;
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  { linkHref: '/phone', Icon: <PhoneIcon /> },
  { linkHref: '/email', Icon: <EmailIcon /> },
  { linkHref: '/instagram', Icon: <InstagramIcon /> },
  { linkHref: '/linkedIn', Icon: <LinkedInIcon /> },
];
