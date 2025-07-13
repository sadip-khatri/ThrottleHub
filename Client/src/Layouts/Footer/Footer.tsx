import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="px-4 md:px-6 lg:px-[85px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-2xl font-bold text-white">246 IMPEX</h2>
                <p className="text-gray-400 text-sm">
                  Your Trusted Tech Store
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted destination for the latest technology, gadgets, and smart devices. Discover innovation, quality, and unbeatable value in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                "New Arrivals",
                "Laptop Collection",
                "Mobile Collection",
                "Exclusive",
                "Accessories",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <div className="space-y-2">
              {[
                "How to Buy",
                "Order Lookup",
                "Returns",
                "Contact Us",
                "FAQ",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: 246Impex@gmail.com</p>
              <p>Phone: 9869946896</p>
              <p>Address: Tamrakar Complex, New Road</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaInstagram,
                    href: "#",
                    color: "hover:text-pink-400",
                  },
                  { icon: FaFacebook, href: "#", color: "hover:text-blue-400" },
                  { icon: FaTwitter, href: "#", color: "hover:text-blue-300" },
                  { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get exclusive offers and latest updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-sm"
              />
              <button className="bg-[#2563eb] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 246 Impex. Made with</span>
              <FaHeart className="text-red-500" />
              <span>for fashion lovers</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center text-white hover:bg-[#1d4ed8] transition-colors"
            >
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
