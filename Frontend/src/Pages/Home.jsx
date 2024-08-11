import React from "react";
import Header from "../Components/Header";
import HomeAbout from "../Components/HomeAbout";
import HomePortfolio from "../Components/HomePortfolio";
import HomeTestimonial from "../Components/HomeTestimonial";
import HomeYoutube from "../Components/HomeYoutube";
import HomeServices from "../Components/HomeServices";

function Home() {
  return (
    <div>
      <Header />
      <HomeServices />
      <HomeYoutube />
      <HomeAbout />
      <HomePortfolio />
      <HomeTestimonial />
    </div>
  );
}

export default Home;
