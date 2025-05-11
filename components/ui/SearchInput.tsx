"use client";

import { FC } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Find your coach..."
    className="w-full md:w-1/2 px-4 py-2 border border-[#bababa] rounded-lg shadow-sm focus:outline-none"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
