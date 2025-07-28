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
    <div className="bg-background text-primary">
      <div className="px-4 md:px-6 lg:px-[85px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-2xl font-bold text-accent">ThrottleHub</h2>
                <p className="text-secondary text-sm">
                  Driven by Trust, Powered by Passion
                </p>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              ThrottleHub is your one-stop destination for cars, bikes, and
              premium auto accessories. Explore cutting-edge machines,
              performance gear, and a ride that fits your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Explore</h3>
            <div className="space-y-2">
              {[
                "New Arrivals",
                "Car Collection",
                "Bike Collection",
                "Exclusive",
                "Accessories",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-secondary hover:text-accent transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Customer Care</h3>
            <div className="space-y-2">
              {[
                "How to Purchase",
                "Track Your Order",
                "Returns & Exchange",
                "Contact Support",
                "FAQs",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-secondary hover:text-accent transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Contact Us</h3>
            <div className="space-y-2 text-sm text-secondary">
              <p>Email: support@throttlehub.com</p>
              <p>Phone: +977-9869946896</p>
              <p>Location: Tamrakar Complex, New Road, KTM</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-accent">Follow Us</h4>
              <div className="flex gap-3">
                {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-secondary hover:text-accent transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-accent">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-secondary text-sm">
              <span>© 2024 ThrottleHub. Made with</span>
              <FaHeart className="text-success" />
              <span>for automobile lovers</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="/terms"
                className="text-secondary hover:text-accent transition-colors"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-secondary hover:text-accent transition-colors"
              >
                Privacy
              </a>
              <a
                href="/sitemap"
                className="text-secondary hover:text-accent transition-colors"
              >
                Sitemap
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-background hover:bg-button-hover transition-colors"
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
