import React from "react";

function NewsLetter() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-10 container mx-auto mt-15 mb-15">
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

        <div className="flex flex-col gap-10">
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
      </section>
    </>
  );
}

export default NewsLetter;
