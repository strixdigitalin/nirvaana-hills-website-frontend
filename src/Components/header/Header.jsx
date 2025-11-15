import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import whatsapp from "../../Assets/WhatsApp.webp";
import call from "../../Assets/call icon.png";

const menu = [
  {
    label: "Home",
    mLink: "/",
  },
  {
    label: "The Project",
    mLink: "/theproject",
    dropdown: [
      { label: "About Nirvaana Hills", mLink: "/theproject#ourstory" },
      { label: "Nirvaana Meaning", mLink: "/theproject#nirvaana-meaning" },
      { label: "Why Choose Us", mLink: "/theproject#whychooseusid" },
      { label: "FAQ", mLink: "/theproject#faqid" },
    ],
  },
  {
    label: "Features",
    mLink: "/features",
    dropdown: [
      { label: "Project features", mLink: "/features#Projectfeatures" },
      { label: "Community features", mLink: "/features#Communityfeatures" },
      { label: "Individual features", mLink: "/features#Individualfeatures" },
      { label: "Clubhouse features", mLink: "/features#Clubhousefeatures" },
    ],
  },
  {
    label: "Location",
    mLink: "/locationpage",
  },
  {
    label: "Life at Nirvaana",
    mLink: "/LifeAtNirvaana",
    dropdown: [
      { label: "Belonging", mLink: "/LifeAtNirvaana#community" },
      { label: "Grow Wild, Grow Free", mLink: "/LifeAtNirvaana#events" },
      { label: "Sustainability", mLink: "/LifeAtNirvaana#sustainability" },
      { label: "Wellness", mLink: "/LifeAtNirvaana#wellness" },
      { label: "Work–Life Balance", mLink: "/LifeAtNirvaana#balance" },
      { label: "Restart Life Together", mLink: "/LifeAtNirvaana#restart" },
      { label: "The Legacy", mLink: "/LifeAtNirvaana#legacy" },
    ],
  },
  {
    label: "Gallery",
    mLink: "/gallery",
  },
  {
    label: "Social impacts",
    mLink: "/socialimpact",
  },
  {
    label: "Our Legacy",
    mLink: "/ourlegacy",
  },
  {
    label: "Contact Us",
    mLink: "/contact",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll handler
  const handleScroll = (path) => {
    const [route, hash] = path.split("#");

    navigate(route); // route par navigate karo
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // thoda delay taki route load ho jaye
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="newnav">
      <header className="absolute top-[0px] mx-auto mt-[25px] navbar-menu">
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
          <ul className="hidden lg:flex items-center dektopmenu relative">
            {menu.map((e, i) => (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(i)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={e.mLink}
                  className="font-[400] font-Belleza text-[16px] leading-[20px] text-[#021E05] hover:text-[#6F7849] transition"
                >
                  {e.label}
                </Link>

                {/* Dropdown */}
                {e.dropdown && dropdownOpen === i && (
                  <ul className="absolute left-0 top-full w-[220px] bg-white rounded-xl shadow-lg p-4 flex flex-col gap-2 z-50">
                    {e.dropdown.map((item, j) => (
                      <li key={j}>
                        <button
                          onClick={() => handleScroll(item.mLink)}
                          className="text-[15px] font-Belleza text-[#021E05] hover:text-[#6F7849] transition text-left w-full block"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
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
                <div key={i}>
                  <Link
                    to={e.mLink}
                    className="font-[400] font-Belleza text-[18px] text-[#021E05] hover:text-[#6F7849] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {e.label}
                  </Link>

                  {/* Mobile Dropdown */}
                  {e.dropdown && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      {e.dropdown.map((sub, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            handleScroll(sub.mLink);
                            setIsOpen(false);
                          }}
                          className="text-[15px] text-[#555] hover:text-[#6F7849] transition text-left"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}
      </header>
      <div className="fixed lg:bottom-[50px] bottom-[25px] right-[30px] z-[100] flex flex-col gap-[16px] items-center">
        {visible && (
          <div onClick={scrollTop}
            className="bg-[#6F7849] cursor-pointer lg:h-[50px] h-[24px] lg:w-[50px] w-[24px] flex justify-center items-center rounded-full border border-[#6F7849] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#6F7849] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]">
            <i class="bi bi-caret-up-fill"></i>
          </div>
        )}
        <a href="tel:+918480064800">
          <img src={call} className="lg:h-[50px] h-[24px] lg:w-[50px] w-[24px] object-cover" alt="Call Icon" />
        </a>
        <a href="https://wa.me/918480064800" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="whatsapp" className="lg:h-[50px] h-[24px] lg:w-[50px] w-[24px] object-cover" />
        </a>
      </div>
    </div>
  );
}

export default Header;
