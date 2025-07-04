import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f6efe7] border-t border-[#8b6f4d] px-6 md:px-[85px] pt-[68px] pb-[30px]">
      {/* Newsletter Section */}
      {/* <section className="flex flex-col lg:flex-row justify-between mb-10 gap-10">
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-2xl font-medium">
            Become part of the community.
          </h2>
          <p className="text-gray-600">
            Receive first access to the very best of REVEILED products,
            inspiration and services.
          </p>
          <form className="flex items-center gap-3 mt-2" method="post">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-64"
            />
            <button type="submit" aria-label="Subscribe" className="p-2">
              <img
                src="img/arrow-right.svg"
                alt="Submit arrow"
                className="w-5 h-5"
              />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="text-sm font-semibold text-black mb-1">EMAIL US</h3>
            <a
              href="mailto:hello@dangiz.com.au"
              className="text-gray-600 text-sm hover:underline"
            >
              hello@dangiz.com.au
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black mb-1">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram">
                <img
                  src="img/akar-icons-instagram-fill.svg"
                  alt="Instagram icon"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img
                  src="img/fa-facebook-square.svg"
                  alt="Facebook icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Footer */}
      <footer>
        <div className="flex flex-col lg:flex-row justify-between mb-7 gap-10">
          <div className="flex flex-wrap gap-30">
            <div className="flex flex-col gap-3">
              <h4 className="text-base text-black font-medium">CATEGORIES</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/bag-collection"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Bags
                  </a>
                </li>
                <li>
                  <a
                    href="mens-collection"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Mens
                  </a>
                </li>
                <li>
                  <a
                    href="new-arrival"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="exclusive"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Exclusive
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-base text-black font-medium">SHOP</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:underline">
                    How to buy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:underline">
                    Look up order
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-base text-black font-medium">DANGIZ</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="our-story"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="contact"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mt-6 lg:mt-0">
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/login"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:underline">
                    Return & Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="img/final-logo-formats-2.svg"
            alt="Dangiz logo"
            className="w-[202px] h-[75px] mx-auto lg:mx-0"
          />
        </div>

        <hr className="border-t border-black my-6" />

        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <li>
              <a href="/dispute" className="hover:underline">
                Dispute
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-and-policy" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Site map
              </a>
            </li>
            <li>
              <a href="/terms-and-condition" className="hover:underline">
                Terms & conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
