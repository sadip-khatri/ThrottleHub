import Button from "../../Components/Ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] max-w-[94%] mx-auto flex items-center bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/90 text-white relative overflow-hidden rounded-md mb-10 mt-2">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-60 w-[120%] h-full -left-10"
        style={{
          backgroundImage: "url('/assets/img/Home/hero.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Text Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            YOUR GATEWAY <br /> TO SMART TECH <br /> & INNOVATION.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-md mb-2">
            Discover the latest in electronics, gadgets, and smart devices — all
            in one place.
          </p>
          <p className="italic text-white/60 mb-6 max-w-md">
            Power your life with the future of technology.
          </p>
          <Link to="new-arrival">
            <Button>
              Explore Now <span className="text-lg">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
