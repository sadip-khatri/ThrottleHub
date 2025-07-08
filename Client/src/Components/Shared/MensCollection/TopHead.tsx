import { Link } from "react-router-dom";

function TopHead() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center text-sm sm:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-[#4b2d18] font-semibold">Mens Collections</span>
        </div>
      </div>
    </section>
  );
}

export default TopHead;
