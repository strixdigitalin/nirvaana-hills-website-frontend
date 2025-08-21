import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
        mLink: "/features"
    },
    {
        label: "Location ",
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
        mLink: "/socialimpact"
    },
       {
        label: "About the team ",
        mLink: "/teams"
    },
       {
        label: "Contact Us",
        mLink: "/contact"
    },
]


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="newnav">

  <header className="absolute top-[0px] max-w-[1392px] w-full mx-auto mt-[25px]">
  <div className="flex items-center justify-between bg-white rounded-full py-[5px] pl-[40px] pr-[24px] shadow-md">
    {/* Logo */}
    <Link to="/">
      <img
        src="/assets/nav/logo.png"
        className="h-[45px] w-[45px] object-cover"
        alt="logo"
      />
    </Link>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex items-center gap-[25px]">
      {menu.map((e, i) => (
        <Link
          key={i}
          to={e.mLink}
          className="font-[400] font-Belleza text-[17px] leading-[20px] text-[#021E05] hover:text-[#6F7849] transition"
        >
          {e.label}
        </Link>
      ))}
    </ul>

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
    <div className="lg:hidden w-full bg-white rounded-2xl shadow-md p-6 mt-4">
      <ul className="flex flex-col gap-6">
        {menu.map((e, i) => (
          <Link
            key={i}
            to={e.mLink}
            className="font-[400] font-Belleza text-[18px] text-[#021E05] hover:text-[#6F7849] transition"
            onClick={() => setIsOpen(false)}
          >
            {e.label}
          </Link>
        ))}
      </ul>
    </div>
  )}
</header>
    </div>

  );
}

export default Header;
