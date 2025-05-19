"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import CustomButton from "@/components/ui/CustomButton";
import { menuItems } from "@/data/menuItems";
import AppLogo from "@/components/ui/AppLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full md:w-auto">
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 items-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="cursor-pointer hover:text-blue-500 duration-200 text-sm"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="flex gap-2 items-center">
          <CustomButton
            href="https://fitogram-dashboard.vercel.app/login"
            label="Log In"
            variant="outline"
          />
          <CustomButton
            href="https://fitogram-dashboard.vercel.app/register"
            label="Sign Up"
            variant="primary"
          />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-end w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#212121] text-2xl"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Fullscreen Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#fff] md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4">
          <AppLogo />
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-1.5 px-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm hover:c-blue duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex gap-2 mt-2">
            <CustomButton
              href="https://fitogram-dashboard.vercel.app/register"
              label="Sign Up"
              variant="primary"
            />
            <CustomButton
              href="https://fitogram-dashboard.vercel.app/login"
              label="Log In"
              variant="outline"
            />
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
