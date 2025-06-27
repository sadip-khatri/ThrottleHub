import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaUser,
  FaSignInAlt,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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

  const navItems = [
    { label: "End of Season Event", path: "/season-event" },
    { label: "New Arrival", path: "/new-arrival" },
    { label: "Trending", path: "/trending" },
    { label: "Our Story", path: "/our-story" },
    { label: "Exclusive", path: "/exclusive" },
    { label: "Accessories", path: "/accessories" },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#e1c3a1] text-center py-1 text-sm text-[#333] font-light">
        Join the community
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-white shadow-sm container mx-auto">
        {/* Search */}
        <div className="flex items-center gap-2 w-1/3">
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
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2">
            <img src="/assets/images/logo.png" alt="Dangiz" className="w-6 h-6 object-contain" />
            <span className="text-2xl font-semibold text-[#4b2d18]">Dangiz</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 w-1/3 justify-end text-[#4b2d18]">
          <div className="flex items-center gap-1 border rounded px-2 py-1 cursor-pointer">
            <TbFlag3 className="text-pink-400" />
            <MdKeyboardArrowDown />
          </div>

          {!user ? (
            <>
              <Link to="/register"><FaUserPlus title="Register" /></Link>
              <Link to="/login"><FaSignInAlt title="Login" /></Link>
            </>
          ) : (
            <>
              <span className="text-sm text-[#4b2d18] font-medium">Hi, {user.name.split(" ")[0]}</span>
              <Link to="/profile"><FaUser title="Profile" /></Link>
              <button onClick={handleLogout}><FaSignOutAlt title="Logout" /></button>
            </>
          )}

          <Link to="/cart"><FaShoppingCart title="Cart" /></Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-8 text-sm py-3 border-t border-gray-200">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="hover:text-[#4b2d18] transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
