import React from "react";
import FooterBrand from "./Footer/FooterBrand";
import FooterLinks from "./Footer/FooterLinks";
import FooterContact from "./Footer/FooterContact";
import FooterBottom from "./Footer/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-5 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <FooterBrand />
        <FooterLinks />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
