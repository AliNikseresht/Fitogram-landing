import React from "react";
import ContactForm from "./ContactForm";

const ContactUsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-5 bg-gray-50 flex flex-col items-center">
      <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
        Contact Us
      </h3>
      <p className="mb-10 text-sm md:text-base text-[#212121] text-center max-w-2xl">
        Have questions or feedback? We&apos;re here to help. Reach out and
        we&apos;ll get back to you shortly.
      </p>

      <ContactForm />
    </section>
  );
};

export default ContactUsSection;
