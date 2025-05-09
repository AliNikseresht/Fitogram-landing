import Link from "next/link";
import React from "react";

const LoginBtn = () => {
  return (
    <button
      type="button"
      className="border-2 text-[#212121] border-[#e2e2e2] py-[0.5em] px-5 rounded-full text-sm cursor-pointer"
    >
      <Link href="/login">Log In</Link>
    </button>
  );
};

export default LoginBtn;
