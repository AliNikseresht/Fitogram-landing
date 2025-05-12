import { SocialItem } from "@/types/socialItems";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export const socials: SocialItem[] = [
  {
    icon: <FaInstagram />,
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: <FaTelegramPlane />,
    href: "#",
    label: "Telegram",
    color: "hover:text-blue-400",
  },
  {
    icon: <FaTwitter />,
    href: "#",
    label: "Twitter",
    color: "hover:text-sky-400",
  },
  {
    icon: <FaFacebookF />,
    href: "#",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
];
