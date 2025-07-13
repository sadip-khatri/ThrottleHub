import { Link } from "react-router-dom";

function TopHead() {
  return (
<<<<<<< HEAD
    <>
      <section className=" bg-gray-100">
        <div className="content container mx-auto py-2 text-sm">
          <Link to="/">Home</Link> /{" "}
          <span className="text-[#2563eb] font-semibold">Mens Collections</span>
=======
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center text-sm sm:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-[#4b2d18] font-semibold">Mens Collections</span>
>>>>>>> def3aaad95fc98fc19fb3ea5b0814890cefffc80
        </div>
      </div>
    </section>
  );
}

export default TopHead;
