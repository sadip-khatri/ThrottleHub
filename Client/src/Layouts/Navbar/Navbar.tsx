/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaUser,
  FaSignInAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { TbFlag3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import { useCountry } from "../../Contexts/CountryContext";

const countries = [
  { name: "Nepal", code: "NP", emoji: "🇳🇵" },
  { name: "India", code: "IN", emoji: "🇮🇳" },
  { name: "USA", code: "US", emoji: "🇺🇸" },
  { name: "UK", code: "GB", emoji: "🇬🇧" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedCountry, setSelectedCountry, countries } = useCountry();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "End of Season Event", path: "/season-event" },
    { label: "New Arrival", path: "/new-arrival" },
    { label: "Trending", path: "/trending" },
    { label: "Our Story", path: "/our-story" },
    { label: "Exclusive", path: "/exclusive" },
    { label: "Accessories", path: "/accessories" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-[#e1c3a1] text-center py-1 text-sm text-[#333] font-light">
        Join the community
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#4b2d18] text-xl"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search box */}
          <div className="hidden md:flex items-center gap-2 w-1/3">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-full max-w-xs">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 py-1 text-sm w-full"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="Dangiz"
                className="w-6 h-6 object-contain"
              />
              <span className="text-2xl font-semibold text-[#4b2d18]">
                Dangiz
              </span>
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5 w-1/3 justify-end text-[#4b2d18]">
            {/* Country Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 border rounded px-2 py-1 cursor-pointer"
              >
                <Flag
                  code={selectedCountry.code}
                  style={{ width: 20, height: 15 }}
                />
                <MdKeyboardArrowDown />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-1 bg-white border rounded shadow-md w-40 right-0 z-50">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-sm gap-2"
                      onClick={() => {
                        setSelectedCountry(country);
                        setDropdownOpen(false);
                      }}
                    >
                      <Flag
                        code={country.code}
                        style={{ width: 20, height: 15 }}
                      />
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/register" title="Register">
              <FaUserPlus />
            </Link>
            <Link to="/profile" title="Profile">
              <FaUser />
            </Link>
            <Link to="/login" title="Login">
              <FaSignInAlt />
            </Link>
            <Link to="/cart" title="Cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`md:hidden px-2 pb-3 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-full max-w-full">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 py-1 text-sm w-full"
            />
          </div>
        </div>

        {/* Mobile Icons */}
        <div
          className={`md:hidden px-2 pt-2 pb-4 flex items-center justify-between text-[#4b2d18] ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Optional: you can copy dropdown logic here too */}
          <div className="flex items-center gap-2 border rounded px-2 py-1 cursor-pointer w-fit mb-2">
            <span className="text-lg">{selectedCountry.emoji}</span>
            <MdKeyboardArrowDown />
          </div>
          <Link to="/register" title="Register">
            <FaUserPlus />
          </Link>
          <Link to="/profile" title="Profile">
            <FaUser />
          </Link>
          <Link to="/login" title="Login">
            <FaSignInAlt />
          </Link>
          <Link to="/cart" title="Cart">
            <FaShoppingCart />
          </Link>
        </div>

        {/* Bottom nav links */}
        <nav
          className={`border-t border-gray-200 md:flex justify-center gap-8 text-sm py-3 px-4 md:px-0 ${
            mobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block md:inline-block hover:text-[#4b2d18] transition-colors duration-200 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
