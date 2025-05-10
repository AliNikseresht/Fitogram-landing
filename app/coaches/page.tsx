"use client";

import CustomLoading from "@/components/ui/CustomLoading";
import { coachesData } from "@/data/coachesData";
import { allTags } from "@/data/TagsData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Coaches = () => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedTag, setSelectedTag] = useState("All");
  const [loading, setLoading] = useState(false);

  const filteredCoaches = coachesData
    .filter((coach) => {
      const matchesSearch =
        coach.name.toLowerCase().includes(search.toLowerCase()) ||
        coach.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTag =
        selectedTag === "All" || coach.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    })
    .slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-lg md:text-3xl lg:text-5xl bg-gradient-to-b from-[#2962eb] to-[#7b3aed] bg-clip-text text-transparent">
          Expert Coaches
        </h1>
        <p className="mt-4 text-xs md:text-sm lg:text-base">
          Find the perfect fitness professional to help you achieve your goals
          and transform your life.
        </p>
      </div>

      {/* Search and Filter Buttons */}
      <div className="flex flex-col gap-5 md:items-center md:justify-between my-8">
        <input
          type="text"
          placeholder="Find your coach..."
          className="w-full md:w-1/2 px-4 py-2 border border-[#bababa] rounded-lg shadow-sm focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full border border-[#bababa] text-xs md:text-sm cursor-pointer duration-200 ${
                selectedTag === tag
                  ? "bg-bc-blue text-[#fff]"
                  : "bg-[#fff] text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Coach Cards */}
      {filteredCoaches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach, index) => (
            <div
              key={index}
              className="bg-[#fff] rounded-lg p-5 shadow hover:shadow-lg duration-200"
            >
              <Image
                src={coach.imageUrl}
                alt={coach.name}
                className="w-full h-48 object-cover rounded mb-4"
                priority
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {coach.name}
              </h3>
              <p className="text-gray-500 mt-1">{coach.tags.join(", ")}</p>
              <Link
                href={coach.profileLink}
                className="mt-4 inline-block c-blue hover:underline text-sm"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-lg font-medium mb-4">
            We have not found any coaches with these specifications at this
            time.
          </p>
          <p>
            If you are interested in working as a coach,
            <Link href="/register" className="text-bc-blue underline">
              Register now!
            </Link>
          </p>
        </div>
      )}

      {/* Load More */}
      {visibleCount < coachesData.length && filteredCoaches.length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={`px-6 py-2 rounded-full text-[#fff] cursor-pointer ${
              loading ? "cursor-not-allowed" : "bg-bc-blue hover:bg-bc-blue"
            } duration-200`}
          >
            {loading ? <CustomLoading /> : "Load More Coaches"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Coaches;
