import React from "react";
import Hero from "./Hero";
import NewIn from "../../Components/Shared/Home/NewIn";
import BagCollection from "../../Components/Shared/Home/BagCollection";
import MensCollection from "../../Components/Shared/Home/MensCollection";
import AdBanner from "../../Components/Shared/Home/AdBanner";
import OurStory from "../../Components/Shared/Home/OurStory";
import Blog from "../../Components/Shared/Home/Blog";
import FollowUs from "../../Components/Shared/Home/FollowUs";
import NewsLetter from "../../Components/Shared/Home/NewsLetter";

function Home() {
  return (
    <>
      <Hero />
      <NewIn />
      <BagCollection />
      <MensCollection />
      <AdBanner />
      <OurStory />
      <Blog />
      <FollowUs />
      <NewsLetter />
    </>
  );
}

export default Home;
