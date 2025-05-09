import React, { FC, ReactNode } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface ContactLineProps {
  icon: ReactNode;
  text: string;
}

const ContactLine: FC<ContactLineProps> = ({ icon, text }) => (
  <div className="flex gap-2 items-center text-sm text-gray-400 mb-2">
    <span className="text-blue-400">{icon}</span>
    <p>{text}</p>
  </div>
);

const FooterContact: FC = () => (
  <div>
    <h3 className="font-bold text-lg mb-4">Contact Us</h3>
    <ContactLine icon={<HiOutlineMail />} text="support@fitogram.com" />
    <ContactLine icon={<FaPhoneAlt />} text="+1 (234) 567-890" />
    <ContactLine
      icon={<FaLocationDot />}
      text="123 Fitness Ave, FitCity, USA"
    />
  </div>
);

export default FooterContact;
