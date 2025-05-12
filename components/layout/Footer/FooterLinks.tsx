import React, { FC } from "react";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";

const FooterLinks: FC = () => (
  <div>
    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
    <ul className="space-y-2 text-sm text-[#9ca3af]">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="cursor-pointer hover:c-blue duration-200 text-sm"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
