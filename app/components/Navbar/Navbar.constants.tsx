import { ReactNode } from "react";
import PhoneIcon from "../Icons/PhoneIcon";
import EmailIcon from "../Icons/EmailIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

interface NavbarItem {
  linkHref: string;
  Icon: ReactNode;
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  { linkHref: "/phone", Icon: <PhoneIcon /> },
  { linkHref: "/email", Icon: <EmailIcon /> },
  { linkHref: "/instagram", Icon: <InstagramIcon /> },
  { linkHref: "/linkedIn", Icon: <LinkedInIcon /> },
];
