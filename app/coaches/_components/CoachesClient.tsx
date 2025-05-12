"use client";

import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput";
import Filters from "@/components/ui/Filters";
import CoachList from "./CoachList";
import { Coach } from "@/types/Coach";

interface CoachesClientProps {
  coaches: Coach[];
  tags: string[];
}

const CoachesClient = ({ coaches, tags }: CoachesClientProps) => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-5 py-5">
      <div className="text-center mb-6">
        <h1>Expert Coaches</h1>
        <p className="mt-4 text-xs md:text-sm lg:text-base">
          Find the perfect fitness professional to help you achieve your goals
          and transform your life.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:items-center md:justify-between my-8">
        <SearchInput value={search} onChange={setSearch} />
        <Filters
          tags={tags}
          selectedTag={selectedTag}
          onSelect={setSelectedTag}
        />
      </div>

      <CoachList coaches={coaches} search={search} selectedTag={selectedTag} />
    </div>
  );
};

export default CoachesClient;
