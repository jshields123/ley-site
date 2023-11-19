import { NavbarItem } from '../../../interfaces/common/common.interfaces';
import PhoneIcon from '../../../components/Icons/PhoneIcon';
import EmailIcon from '../../../components/Icons/EmailIcon';
import InstagramIcon from '../../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../../components/Icons/LinkedInIcon';
import { onClickToCall } from '../functions/onClickToCall';
import { onClickToEmail } from '../functions/onClickToEmail';

export const NAVBAR_ITEMS: NavbarItem[] = [
  { Icon: <PhoneIcon />, onClick: onClickToCall, id: 'phone' },
  { Icon: <EmailIcon />, onClick: onClickToEmail, id: 'email' },
  { linkHref: 'https://www.instagram.com/leyconsulting', Icon: <InstagramIcon />, id: 'instagram' },
  { linkHref: 'https://www.linkedin.com/in/laureneyates/', Icon: <LinkedInIcon />, id: 'linkedIn' },
];
