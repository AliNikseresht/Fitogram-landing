"use client";

import { FC, useState } from "react";
import CoachCard from "./CoachCard";
import EmptyState from "./EmptyState";
import { Coach } from "@/types/Coach";
import CustomLoading from "@/components/ui/CustomLoading";


interface CoachListProps {
  coaches: Coach[];
  search: string;
  selectedTag: string;
}

const CoachList: FC<CoachListProps> = ({ coaches, search, selectedTag }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const filtered = coaches
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

  if (filtered.length === 0) return <EmptyState />;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((coach, idx) => (
          <CoachCard key={idx} coach={coach} />
        ))}
      </div>

      {visibleCount < coaches.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={`px-6 py-2 rounded-full text-white cursor-pointer ${
              loading ? "cursor-not-allowed" : "bg-gradient-to-r from-[#2962eb] to-[#7b3aed]"
            } duration-200`}
          >
            {loading ? <CustomLoading /> : "Load More Coaches"}
          </button>
        </div>
      )}
    </>
  );
};

export default CoachList;
