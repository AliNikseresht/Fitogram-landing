import Image from "next/image";
import React from "react";
import FitnessJourneyPhoto from "@/public/landing-banner1.png";
import CustomButton from "./CustomButton";

const FitnessJourneySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center w-full justify-around md:max-w-7xl p-3 md:p-5 gap-4 md:gap-2">
      <div className="flex flex-col md:gap-4 w-full md:max-w-[32rem] items-center md:items-start">
        <h2 className="font-bold text-lg md:text-3xl lg:text-5xl bg-gradient-to-b from-[#2962eb] to-[#7b3aed] bg-clip-text text-transparent">
          Transform Your Fitness Journey
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-center md:text-start">
          Fitogram connects you with elite coaches to create personalized
          workout and nutrition plans that fit your lifestyle. Track your
          progress, stay motivated, and achieve your fitness goals faster.
        </p>
        <div className="flex gap-2 mt-4">
          <CustomButton
            variant="primary"
            href="/register"
            label="Start Your Journey"
          />
          <CustomButton variant="outline" href="/faq" label="See How It Works" />
        </div>
      </div>
      <Image
        src={FitnessJourneyPhoto}
        alt="Fitness journey section image"
        className="rounded-lg shadow-2xl"
        width={550}
        height={500}
        priority
      />
    </section>
  );
};

export default FitnessJourneySection;
