import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import contactPhoto from "@/public/contact-us-image.png";

const ContactUsSection: React.FC = () => {
  return (
    <section className="w-full py-5 px-3 md:px-5 flex flex-col items-center">
      <h2>Contact Us</h2>
      <p className="mt-4 mb-10 text-xs md:text-sm lg:text-base">
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
