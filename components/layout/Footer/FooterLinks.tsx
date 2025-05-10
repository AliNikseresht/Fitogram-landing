import React, { FC } from "react";
import Link from "next/link";

const links: string[] = ["About Us", "Coaches", "FAQ", "Contact Us"];

const FooterLinks: FC = () => (
  <div>
    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
    <ul className="space-y-2 text-sm text-[#9ca3af]">
      {links.map((item: string, index: number) => (
        <li key={index}>
          <Link
            href={`/${item.toLowerCase().replace(/\s/g, "")}`}
            className="hover:c-blue transition-colors"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
