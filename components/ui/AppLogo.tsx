import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-[#2962eb] to-[#7b3aed] bg-clip-text text-transparent">
          Fitogram
        </h1>
      </Link>
    </div>
  );
};

export default AppLogo;
