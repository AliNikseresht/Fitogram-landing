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
        className={`px-4 py-2 rounded-full border border-[#bababa] text-xs md:text-sm duration-200 ${
          selectedTag === tag
            ? "bg-bc-blue text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default Filters;
