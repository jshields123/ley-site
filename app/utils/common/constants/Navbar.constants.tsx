import { ReactNode } from 'react';
import PhoneIcon from '../../../components/Icons/PhoneIcon';
import EmailIcon from '../../../components/Icons/EmailIcon';
import InstagramIcon from '../../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../../components/Icons/LinkedInIcon';
import { onClickToCall } from '../functions/clickToCall';
import { onClickToEmail } from '../functions/clickToEmail';

interface NavbarItem {
  id: string;
  linkHref?: string;
  Icon: ReactNode;
  onClick?: () => void;
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  { Icon: <PhoneIcon />, onClick: () => onClickToCall, id: 'phone' },
  { Icon: <EmailIcon />, onClick: () => onClickToEmail, id: 'email' },
  { linkHref: '/instagram', Icon: <InstagramIcon />, id: 'instagram' },
  { linkHref: '/linkedIn', Icon: <LinkedInIcon />, id: 'linkedIn' },
];
