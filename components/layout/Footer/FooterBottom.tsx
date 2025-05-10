import React, { FC } from "react";
import Link from "next/link";

const links: string[] = ["FAQ", "Support", "Careers"];

const FooterBottom: FC = () => (
  <div className="border-t border-[#333333] mt-10 pt-7 flex flex-col md:flex-row justify-between items-center text-sm text-[#9ca3af] gap-4">
    <span>
      &copy; {new Date().getFullYear()} Fitogram. All rights reserved.
    </span>
    <ul className="flex gap-4">
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

export default FooterBottom;
