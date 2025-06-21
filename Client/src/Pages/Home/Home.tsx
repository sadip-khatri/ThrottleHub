import React from "react";
import Hero from "./Hero";
import NewIn from "../../Components/Shared/Home/NewIn";
import BagCollection from "../../Components/Shared/Home/BagCollection";
import MensCollection from "../../Components/Shared/Home/MensCollection";
import AdBanner from "../../Components/Shared/Home/AdBanner";
import OurStory from "../../Components/Shared/Home/OurStory";

function Home() {
  return (
    <>
      <Hero />
      <NewIn />
      <BagCollection />
      <MensCollection />
      <AdBanner />
      <OurStory />
    </>
  );
}

export default Home;
