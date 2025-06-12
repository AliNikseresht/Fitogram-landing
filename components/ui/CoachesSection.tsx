"use client";

import { coachesData } from "@/data/coachesData";
import { allTags } from "@/data/TagsData";
import { Coach } from "@/types/Coach";
import Image from "next/image";
import React, { useState } from "react";

const CoachesSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredCoaches =
    activeTag === "All"
      ? coachesData
      : coachesData.filter((coach) => coach.tags.includes(activeTag));

  return (
    <section className="w-full lg:py-10 px-3 md:px-5 text-center">
      <h2 className="font-bold text-xl md:text-3xl lg:text-5xl mb-2">
        Meet Our Elite Coaches
      </h2>
      <p className="text-xs md:text-sm lg:text-base mx-auto text-gray-600">
        Connect with licensed professionals who are eager to help you achieve
        your fitness goals.
      </p>
      <p className="text-gray-600 mb-6">Some of the best trainers we have worked with include</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 cursor-pointer min-w-[55px] ${
              activeTag === tag
                ? "bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredCoaches.map((coach: Coach, index: number) => (
          <div
            key={index}
            className="bg-[#fff] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
          >
            <Image
              src={coach.imageUrl}
              alt={coach.name}
              className="w-full h-48 object-cover"
              priority
              width={400}
              height={400}
            />

            <div className="p-4 text-start flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-2">
                {coach.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-lg">{coach.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{coach.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachesSection;
