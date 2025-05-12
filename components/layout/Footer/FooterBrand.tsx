import AppLogo from "@/components/ui/AppLogo";
import { socials } from "@/data/footerSocials";
import Link from "next/link";
import React, { FC, JSX } from "react";

const FooterBrand: FC = () => (
  <div className="flex flex-col items-start">
    <AppLogo />
    <p className="my-5 text-sm text-[#9ca3af] max-w-xs">
      Transforming fitness journeys through personalized coaching and
      cutting-edge technology.
    </p>
    <div className="flex space-x-4 text-lg text-[#9ca3af]">
      {socials.map(({ icon, href, label, color }, index) => (
        <Link
          key={index}
          href={href}
          aria-label={label}
          className={`${color} duration-200`}
        >
          {icon}
        </Link>
      ))}
    </div>
  </div>
);

export default FooterBrand;
