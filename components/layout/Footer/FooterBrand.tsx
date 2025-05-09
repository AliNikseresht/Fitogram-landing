import AppLogo from "@/components/ui/AppLogo";
import React, { FC, JSX } from "react";

import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

interface SocialItem {
  icon: JSX.Element;
  href: string;
  label: string;
  color: string;
}

const socials: SocialItem[] = [
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

const FooterBrand: FC = () => (
  <div>
    <AppLogo />
    <p className="my-5 text-sm text-gray-400 max-w-xs">
      Transforming fitness journeys through personalized coaching and
      cutting-edge technology.
    </p>
    <div className="flex space-x-4 text-lg text-gray-400">
      {socials.map(({ icon, href, label, color }, index) => (
        <a key={index} href={href} aria-label={label} className={color}>
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export default FooterBrand;
