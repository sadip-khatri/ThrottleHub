import React from "react";
import { FaArrowRight, FaInstagram, FaFacebook } from "react-icons/fa";

function NewsLetter() {
  return (
    <section className="bg-[#f8f6f3] py-14 px-6 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto bg-white/90 shadow-md rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left: Heading + form */}
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-2">
            Get exclusive access to new products, design inspiration, and more.
          </p>

          <form
            className="flex flex-col sm:flex-row items-center gap-3 mt-6"
            method="post"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-72 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B48B65]"
            />
            <button
              type="submit"
              className="bg-[#B48B65] text-white px-5 py-3 rounded-full hover:bg-[#a07755] transition flex items-center gap-2 cursor-pointer"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Right: Contact & social */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-black">EMAIL US</h3>
            <a
              href="mailto:hello@dangiz.com.au"
              className="text-gray-600 text-sm hover:underline break-words"
            >
              hello@dangiz.com.au
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black mb-2">FOLLOW US</h3>
            <div className="flex justify-center lg:justify-start gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#B48B65] transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#B48B65] transition"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
