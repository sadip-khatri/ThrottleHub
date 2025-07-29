import { Link } from "react-router-dom";

function TopHead() {
  return (
    <>
      <section className=" bg-background">
        <div className="content container mx-auto py-2 text-sm">
          <Link to="/">Home</Link> /{" "}
          <span className="text-[#00FFFF] font-semibold">Car Collections</span>
        </div>
      </section>
    </>
  );
}

export default TopHead;
