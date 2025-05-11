import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import contactPhoto from "@/public/contact-us-image.png";

const ContactUsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-3 md:px-5 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#2962eb] to-[#7b3aed] bg-clip-text text-transparent mb-6">
        Contact Us
      </h2>
      <p className="mb-10 text-xs md:text-base text-[#212121] text-center max-w-2xl">
        Have questions or feedback? We&apos;re here to help. Reach out and
        we&apos;ll get back to you shortly.
      </p>

      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <ContactForm />
        <Image
          src={contactPhoto}
          alt="contact photo"
          priority
          width={600}
          height={600}
          className="object-contain hidden md:flex rounded-lg h-auto"
        />
      </div>
    </section>
  );
};

export default ContactUsSection;
