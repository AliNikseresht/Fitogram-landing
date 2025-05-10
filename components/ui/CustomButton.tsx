import Link from "next/link";
import React from "react";
import clsx from "clsx";

type CustomButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
};

const CustomButton: React.FC<CustomButtonProps> = ({ href, label, variant = "primary" }) => {
  const baseClass =
    "py-2 px-4 md:px-5 rounded-full text-xs md:text-sm cursor-pointer transition duration-200";
  const styles = {
    primary: "bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-[#fff]",
    outline: "border-2 border-[#e2e2e2] text-[#212121]",
  };

  return (
    <Link href={href}>
      <button type="button" className={clsx(baseClass, styles[variant])}>
        {label}
      </button>
    </Link>
  );
};

export default CustomButton;
