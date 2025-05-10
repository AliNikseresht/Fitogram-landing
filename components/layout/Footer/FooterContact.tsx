import React, { FC, ReactNode } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface ContactLineProps {
  icon: ReactNode;
  text: string;
}

const ContactLine: FC<ContactLineProps> = ({ icon, text }) => (
  <div className="flex gap-2 items-center text-sm text-[#9ca3af] mb-2">
    <span className="text-[#60a5fa]">{icon}</span>
    <p>{text}</p>
  </div>
);

const FooterContact: FC = () => (
  <div>
    <h3 className="font-bold text-lg mb-4">Contact Us</h3>
    <ContactLine icon={<HiOutlineMail size={17}/>} text="support@fitogram.com" />
    <ContactLine icon={<FaPhoneAlt />} text="+98-920-262-4622" />
    <ContactLine
      icon={<FaLocationDot />}
      text="Tehran, Iran"
    />
  </div>
);

export default FooterContact;
