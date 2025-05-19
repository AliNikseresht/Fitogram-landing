import { aboutParagraphs } from "@/data/aboutParagraphs";
import React from "react";

const About = () => {
  return (
    <main className="flex flex-col items-center gap-4 w-full px-3 md:px-5 py-5 text-[#212121]">
      <h2>About Fitogram</h2>

      <div className="max-w-4xl">
        {aboutParagraphs.map((text, index) => (
          <p
            key={index}
            className="my-6 leading-8 text-xs md:text-sm lg:text-base text-justify"
          >
            {text}
          </p>
        ))}

        <div className="mt-10 text-center">
          <span className="inline-block text-sm text-gray-500">
            Version 1.0 | Fitogram © 2025
          </span>
        </div>
      </div>
    </main>
  );
};

export default About;
