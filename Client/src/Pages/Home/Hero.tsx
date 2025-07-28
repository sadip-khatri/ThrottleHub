import Button from "../../Components/Ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] max-w-[94%] mx-auto flex items-center justify-center bg-surface text-primary relative overflow-hidden rounded-md mb-10 mt-2">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-40 w-[120%] h-full -left-10"
        style={{
          backgroundImage: "url('/assets/img/Home/hero.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
          YOUR GATEWAY TO POWER, PERFORMANCE & PRECISION.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-secondary mb-2">
          Discover the latest bikes and cars — where style meets speed, and
          reliability drives every mile.
        </p>
        <p className="italic text-secondary/80 mb-6">
          Fuel your passion with the ultimate driving experience.
        </p>

        {/* ✅ Centering the button */}
        <div className="flex justify-center">
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
