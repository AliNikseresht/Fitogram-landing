"use client";

import React from "react";
import { useForm } from "react-hook-form";
import CustomLoading from "@/components/ui/CustomLoading";
import FormField from "./FormField";

type ContactFormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const validationRules = {
  name: { required: "Name is required" },
  email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address",
    },
  },
  subject: { required: "Subject is required" },
  message: { required: "Message is required" },
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Form submitted:", data);
      await new Promise((res) => setTimeout(res, 1000));
      alert("Message sent successfully!");
    } catch {
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#fff] rounded-lg shadow-md p-3 md:p-6 space-y-5 max-w-2xl w-full"
      noValidate
    >
      <FormField
        id="name"
        label="Full Name"
        register={register("name", validationRules.name)}
        error={errors.name?.message}
        placeholder="Your name"
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        register={register("email", validationRules.email)}
        error={errors.email?.message}
        placeholder="you@example.com"
      />
      <FormField
        id="subject"
        label="Subject"
        register={register("subject", validationRules.subject)}
        error={errors.subject?.message}
        placeholder="Message subject"
      />
      <FormField
        id="message"
        label="Message"
        isTextArea
        register={register("message", validationRules.message)}
        error={errors.message?.message}
        placeholder="Type your message here..."
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full font-medium text-base bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-[#fff] px-6 py-2 rounded-full"
      >
        {isSubmitting ? <CustomLoading /> : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
