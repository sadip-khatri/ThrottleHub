import { Link } from "react-router-dom";
function TopHead() {
  return (
    <>
      <section className=" bg-gray-100">
        <div className="content container mx-auto py-2 text-sm">
          <Link to="/">Home</Link> /{" "}
          <span className="text-[#00FFFF] font-semibold">Blogs</span>
        </div>
      </section>
    </>
  );
}

export default TopHead;
