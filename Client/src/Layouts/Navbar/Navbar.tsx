/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaStar,
  FaHeart,
  FaRocket,
  FaCrown,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import { useCountry } from "../../Contexts/CountryContext";
import api from "../../Utils/api";

interface User {
  name: string;
  email: string;
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCountry, setSelectedCountry, countries } = useCountry();
  const [user, setUser] = useState<User | null>(null);

  const navItems = [
    // { label: "Home", path: "/" },
    { label: "New Arrivals", path: "/new-arrival" },
    { label: "Bike Collection", path: "/bike-collection" },
    { label: "Car Collection", path: "/car-collection" },
    { label: "Exclusive", path: "/exclusive" },
    { label: "Accessories", path: "/accessories" },
    // { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" },
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
    <div className="bg-surface shadow-md sticky top-0 z-50">
      <div className="px-4 md:px-6 lg:px-[85px]">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold text-accent">ThrottleHub</h1>
              <p className="text-xs text-secondary">
                Driven by Trust, Powered by Passion
              </p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-primary placeholder:text-secondary"
                />
              </div>
            </form>
          </div>

          {/* Right Side Actions (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Country Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-surface border border-accent rounded-lg px-3 py-2 cursor-pointer hover:bg-background transition-colors"
              >
                <Flag
                  code={selectedCountry.code}
                  style={{ width: 20, height: 15 }}
                />
                <MdKeyboardArrowDown className="text-secondary" />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 bg-surface border border-accent rounded-lg shadow-lg w-48 right-0 z-50">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      className="flex items-center w-full px-4 py-3 hover:bg-background text-sm gap-3 transition-colors text-primary"
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

            {/* User Actions */}
            {!user ? (
              <div className="flex gap-2">
                <Link
                  to="/register"
                  className="bg-success text-primary px-4 py-2 rounded-lg font-medium hover:bg-success/90 transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-background text-primary px-4 py-2 rounded-lg font-medium hover:bg-surface transition-colors border border-accent"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm text-secondary hidden sm:block">
                  Hi, {user.name.split(" ")[0]}
                </span>
                <Link
                  to="/profile"
                  className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-background hover:bg-accent/80 transition-colors"
                >
                  <FaUser />
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-8 h-8 bg-error rounded-lg flex items-center justify-center text-background hover:bg-error/90 transition-colors"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-background hover:bg-accent/80 transition-colors">
                <FaShoppingCart />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-warning text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button (Only) */}
          <button
            className="md:hidden w-10 h-10 bg-[#00FFFF] rounded-lg flex items-center justify-center text-white hover:bg-[#1d4ed8] transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-40">
            <div className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-in">
              {/* Close Button */}
              <button
                className="self-end mb-2 text-gray-500 hover:text-[#00FFFF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>
              {/* Search */}
              <form onSubmit={handleSearch} className="mb-2">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-[#00FFFF]"
                  />
                </div>
              </form>
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="text-gray-700 hover:text-[#00FFFF] transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* User Actions */}
              <div className="flex flex-col gap-3 mt-4">
                {!user ? (
                  <>
                    <Link
                      to="/register"
                      className="bg-[#00FFFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors text-center"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/login"
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="w-full bg-[#00FFFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <FaUser /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </>
                )}
              </div>
              {/* Cart */}
              <Link
                to="/cart"
                className="w-full bg-[#00FFFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors text-center flex items-center justify-center gap-2 relative"
              >
                <FaShoppingCart />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Links (Desktop Only) */}
        <div className="hidden md:block pb-4">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-gray-400 hover:text-gray-600 transition-colors font-medium text-center md:text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
