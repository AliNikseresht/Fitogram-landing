import Link from "next/link";
import React from "react";

const RegisterBtn = () => {
  return (
    <button
      type="button"
      className="bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-[#fff] py-2 px-5 rounded-full text-sm cursor-pointer"
    >
      <Link href="/register">Sign Up</Link>
    </button>
  );
};

export default RegisterBtn;
