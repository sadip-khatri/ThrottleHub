/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import { useCountry } from "../../Contexts/CountryContext";
import api from "../../utils/api"

interface User {
  name: string;
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const { selectedCountry, setSelectedCountry, countries } = useCountry();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "End of Season Event", path: "/season-event" },
    { label: "New Arrival", path: "/new-arrival" },
    { label: "Trending", path: "/trending" },
    { label: "Our Story", path: "/our-story" },
    { label: "Exclusive", path: "/exclusive" },
    { label: "Accessories", path: "/accessories" },
  ];

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

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

 useEffect(() => {
  const fetchCartCount = async () => {
    try {
      const res = await api.get("/cart"); 
      const cartItems = res.data;

      const total = cartItems.reduce(
        (sum: number, item: any) => sum + (item.quantity || 1),
        0
      );

      setCartCount(total);
    } catch (err) {
      console.error("Failed to fetch cart count", err);
      setCartCount(0); // fallback
    }
  };

  fetchCartCount();
}, [location]);

  return (
    <div className="w-full">
      {/* Announcement Banner */}
      <div className="bg-[#e1c3a1] text-center py-1 text-sm text-[#333] font-light">
        Join the community
      </div>

      {/* Top Navbar */}
      <div className="bg-white shadow-sm container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4b2d18] text-xl"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search Input (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 w-1/3">
            <form onSubmit={handleSearch} className="w-full max-w-xs">
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-full">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none px-2 py-1 text-sm w-full"
                />
              </div>
            </form>
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

          {/* Icons Section */}
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

            {/* User Auth */}
            {!user ? (
              <>
                <Link to="/register" title="Register">
                  <FaUserPlus />
                </Link>
                <Link to="/login" title="Login">
                  <FaSignInAlt />
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm font-medium">
                  Hi, {user.name.split(" ")[0]}
                </span>
                <Link to="/profile" title="Profile">
                  <FaUser />
                </Link>
                <button onClick={handleLogout} title="Logout">
                  <FaSignOutAlt />
                </button>
              </>
            )}

            {/* Cart */}
            <Link to="/cart" title="Cart" className="relative">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex justify-center gap-8 text-sm py-3 border-t border-gray-200 px-4 md:px-0`}
        >
          {/* Mobile Search Input */}
          <div className="md:hidden mb-4">
            <form onSubmit={handleSearch}>
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </form>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
