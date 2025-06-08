"use client";

import { FC } from "react";

interface FiltersProps {
  tags: string[];
  selectedTag: string;
  onSelect: (tag: string) => void;
}

const Filters: FC<FiltersProps> = ({ tags, selectedTag, onSelect }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {tags.map((tag) => (
      <button
        key={tag}
        onClick={() => onSelect(tag)}
        className={`px-4 py-1.5 rounded-lg border border-[#bababa] text-xs md:text-sm duration-200 min-w-[55px] ${
          selectedTag === tag
            ? "bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default Filters;
