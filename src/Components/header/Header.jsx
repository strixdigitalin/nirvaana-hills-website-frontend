import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const menu = [
    {
        label: "Home",
        mLink: "/"
    },
    {
        label: "The Project",
        mLink: "/theproject"
    },
    {
        label: "Features",
        mLink: "/"
    },
    {
        label: "Location ",
        mLink: "/"
    },
    {
        label: "Plots & Pricing",
        mLink: "/"
    },
     {
        label: "Life at Nirvaana ",
        mLink: "/LifeAtNirvaana"
    },
       {
        label: "Gallery ",
        mLink: "/gallery"
    },
       {
        label: "Social impacts points",
        mLink: "/"
    },
       {
        label: "About the team ",
        mLink: "/"
    },
       {
        label: "Contact Us",
        mLink: "/contact"
    },
]


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-[25px] left-1/2 -translate-x-1/2 max-w-[1392px] w-full z-[100]">
      <div className="flex items-center justify-between bg-white rounded-full py-[10px] pl-[40px] pr-[24px] shadow-md">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/nav/logo.png"
            className="h-[54px] w-[54px] object-cover"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[25px]">
          {menu.map((e, i) => (
            <Link
              key={i}
              to={e.mLink}
              className="font-[400] font-Belleza text-[18px] leading-[20px] text-[#021E05] hover:text-[#6F7849] transition"
            >
              {e.label}
            </Link>
          ))}
        </ul>

        {/* Desktop Button */}
        {/* <button className="hidden lg:block bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-transparent hover:text-[#6F7849] rounded-full py-[14px] px-[30px] font-[400] font-bricolage text-[18px] leading-[21px] text-white">
          Let's Talk
        </button> */}

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#021E05]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white rounded-2xl shadow-md p-6">
          <ul className="flex flex-col gap-6">
            {menu.map((e, i) => (
              <Link
                key={i}
                to={e.mLink}
                className="font-[400] font-Belleza text-[18px] text-[#021E05] hover:text-[#6F7849] transition"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {e.label}
              </Link>
            ))}
          </ul>
          {/* <button className="mt-6 w-full bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-transparent hover:text-[#6F7849] rounded-full py-[14px] px-[30px] font-[400] font-bricolage text-[18px] leading-[21px] text-white">
            Let's Talk
          </button> */}
        </div>
      )}
    </header>
  );
}

export default Header;
