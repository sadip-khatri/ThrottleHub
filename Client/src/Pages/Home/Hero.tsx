import Button from "../../Components/Ui/Button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="w-full h-[80vh] max-w-[94%] m-auto flex items-center bg-gradient-to-r from-[#b67c4b]/90 to-[#e3b47c]/90 text-white relative overflow-hidden rounded-md mb-10 mt-2">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover opacity-80 w-[120%] [h-100%]"
        style={{
          backgroundImage: "url('/assets/img/Home/hero.jpg')",
          backgroundPosition: "8% 1%",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            A PREMIUM <br /> MARKET PLACE <br /> FOR YOU.
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md mb-2">
            A premium marketplace where you can extend the product lifecycle
            &amp; minimize your carbon footprint.
          </p>
          <p className="italic text-white/60 mb-6">
            Share the love and find something with us
          </p>
          <Link to="new-arrival">
            <Button>
              Shop Now <span className="text-lg">→</span>
            </Button>
          </Link>
        </div>

        {/* Removed image on the right */}
      </div>
    </section>
  );
};

export default Hero;
