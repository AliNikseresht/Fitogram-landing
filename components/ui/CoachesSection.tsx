"use client";

import { coachesData } from "@/data/coachesData";
import { allTags } from "@/data/TagsData";
import { Coach } from "@/types/Coach";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const CoachesSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState("All Coaches");

  const filteredCoaches =
    activeTag === "All Coaches"
      ? coachesData
      : coachesData.filter((coach) => coach.tags.includes(activeTag));

  return (
    <section className="w-full py-16 px-5 bg-[#fff] text-center">
      <h2 className="font-bold text-xl md:text-3xl lg:text-5xl mb-2">
        Meet Our Elite Coaches
      </h2>
      <p className="text-xs md:text-sm lg:text-base mx-auto mb-8">
        Connect with certified professionals who are passionate about helping
        you achieve your fitness goals.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 cursor-pointer ${
              activeTag === tag
                ? "bg-bc-blue text-white"
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

            <div className="p-4 text-start">
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
              <Link
                href={coach.profileLink}
                className="text-blue-600 text-sm font-medium hover:underline duration-200"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10">
        <Link
          href="/coaches"
          className="px-6 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 duration-200 cursor-pointer"
        >
          View All Coaches
        </Link>
      </div>
    </section>
  );
};

export default CoachesSection;
