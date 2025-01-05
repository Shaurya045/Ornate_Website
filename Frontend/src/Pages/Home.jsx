import Header from "../Components/Header";
import HomeAbout from "../Components/HomeAbout";
import HomePortfolio from "../Components/HomePortfolio";
import HomeTestimonial from "../Components/HomeTestimonial";
import HomeYoutube from "../Components/HomeYoutube";
import HomeServices from "../Components/HomeServices";
import HomeAddReview from "../Components/HomeAddReview";
// import DiscountBanner from "../Components/Banner";

function Home() {
  return (
    <div>
      <Header />
      {/* <DiscountBanner /> */}
      <HomeServices />
      <HomeYoutube />
      <HomeAbout />
      <HomePortfolio />
      <HomeTestimonial />
      <HomeAddReview />
    </div>
  );
}

export default Home;
