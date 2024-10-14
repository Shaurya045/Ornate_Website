import logo from "./Ornate_Logo.png";
import logo2 from "./Ornate_Logo2.png";
import clock from "./Alarm_Clock.png";
import flower1 from "./About_Flower1.png";
import flower2 from "./About_Flower2.png";
import aboutImg from "./About_Img.png";
import homePort_logo from "./Home_Portfolio_Logo.png";
import homePort_flower from "./Home_Portfolio_Flower.png";
import testimonialBG from "./Testimonial_BG.png";
import stars from "./Stars_Icon.png";
import contact1 from "./Contact_Icon1.png";

import home1 from "./Home_cover1.png";
import home2 from "./Home_Cover2.PNG";
import home3 from "./Home_Cover3.png";
import home4 from "./Home_Cover4.png";
import homePort1 from "./Home_Portfolio1.png";
import homePort2 from "./Home_Portfolio2.png";
import homePort3 from "./Home_Portfolio3.png";
import homePort4 from "./Home_Portfolio4.png";
import portfolioheadImg from "./Portfolio_HeaderImg.png";
import trainingheadImg from "./TrainingHeadImg.png";
import trainingaboutImg from "./TrainingAboutImg.png";
import traininggridImg from "./TrainingGridImg.png";
import youtube1 from "./Youtube1.png";
import youtube2 from "./Youtube2.jpg";
import youtube3 from "./Youtube3.jpg";

import bridal1 from "./Bridal1.png";
import bridal2 from "./Bridal2.png";
import bridal3 from "./Bridal3.png";
import bridal4 from "./Bridal4.png";
import bridal5 from "./Bridal5.png";
import bridal6 from "./Bridal6.png";
import bridal7 from "./Bridal7.png";
import bridal8 from "./Bridal8.png";
import bridal9 from "./Bridal9.png";
import bridal10 from "./Bridal10.png";
import bridal11 from "./Bridal11.png";
import bridal12 from "./Bridal12.png";

import servicesSlider1 from "./ServicesSliderImg1.png";

// PORTFOLIO PHOTOS

// Bridal Photos
import Bridal1 from "./Bridal/Bridal1.jpeg";
import Bridal2 from "./Bridal/Bridal2.jpeg";
import Bridal3 from "./Bridal/Bridal3.jpeg";
import Bridal4 from "./Bridal/Bridal4.jpeg";
import Bridal5 from "./Bridal/Bridal5.jpeg";
import Bridal6 from "./Bridal/Bridal6.jpeg";
import Bridal7 from "./Bridal/Bridal7.jpeg";
import Bridal8 from "./Bridal/Bridal8.jpeg";
import Bridal9 from "./Bridal/Bridal9.jpeg";
import Bridal10 from "./Bridal/Bridal10.jpg";
import Bridal11 from "./Bridal/Bridal11.jpg";

// Photoshoot Photos
import Photoshoot1 from "./Photoshoot/Photoshoot1.JPG";
import Photoshoot2 from "./Photoshoot/Photoshoot2.JPG";
import Photoshoot3 from "./Photoshoot/Photoshoot3.JPG";
import Photoshoot4 from "./Photoshoot/Photoshoot4.JPG";
import Photoshoot5 from "./Photoshoot/Photoshoot5.JPG";
import Photoshoot6 from "./Photoshoot/Photoshoot6.jpeg";
import Photoshoot7 from "./Photoshoot/Photoshoot7.jpeg";
import Photoshoot8 from "./Photoshoot/Photoshoot8.jpeg";
import Photoshoot9 from "./Photoshoot/Photoshoot9.jpeg";
import Photoshoot10 from "./Photoshoot/Photoshoot10.jpeg";
import Photoshoot11 from "./Photoshoot/Photoshoot11.jpeg";
import Photoshoot12 from "./Photoshoot/Photoshoot12.jpeg";

// Special Occasion Photos
import Special1 from "./Special_Occasion/Special1.jpeg";
import Special2 from "./Special_Occasion/Special2.jpeg";
import Special3 from "./Special_Occasion/Special3.jpeg";

// Party Photos
import Party1 from "./Party/Party1.jpg";
import Party2 from "./Party/Party2.jpg";
import Party3 from "./Party/Party3.jpg";
import Party4 from "./Party/Party4.jpg";

export const icons = {
  logo,
  logo2,
  clock,
  flower1,
  flower2,
  aboutImg,
  homePort_flower,
  homePort_logo,
  testimonialBG,
  stars,
  contact1,
};

export const images = {
  homePort1,
  homePort2,
  homePort3,
  homePort4,
  portfolioheadImg,
  trainingaboutImg,
  trainingheadImg,
  traininggridImg,
  bridal1,
  bridal2,
  bridal3,
  bridal4,
  bridal5,
  bridal6,
  bridal7,
  bridal8,
  bridal9,
  bridal10,
  bridal11,
  bridal12,
  youtube1,
  youtube2,
  youtube3,
};

export const homeCover = [
  {
    image: home4,
    title: "BRIDAL MAKEUP",
    desc: "We do all forms of makeup.",
  },
  {
    image: home1,
    title: "PHOTOSHOOT MAKEUP",
    desc: "We do all forms of makeup.",
  },
];

export const servicesSlider = [servicesSlider1, Bridal5];

// export const homeTestimonial = [
//   {
//     image1: homePort2,
//     image2: homePort4,
//     name: "Priya",
//     testimonial:
//       "Ornate Makeup Studio transformed me into a vision of beauty on my wedding day. Their attention to detail and artistry is unmatched!",
//   },
//   {
//     image1: homePort2,
//     image2: homePort4,
//     name: "Neha",
//     testimonial: "We are very happy with the service.",
//   },
// ];

export const serviceTestimonial = [
  {
    image: "xyz",
    name: "Priya",
    testimonial: "We are very happy with the service.",
  },
];

export const package_list = [
  {
    _id: "1",
    name: "PARTY MAKEUP",
    // image: partyBasic,
    image: Party2,
    price: "3,999",
    description: "Basic",
    category: ["Party"],
  },
  {
    _id: "2",
    name: "PARTY MAKEUP",
    // image: partyHD,
    image: homePort4,
    price: "5,999",
    description: "HD",
    category: ["Party"],
  },
  {
    _id: "3",
    name: "PARTY MAKEUP",
    // image: partyPremiumHD,
    image: homePort1,
    price: "6,999",
    description: "Premium HD",
    category: ["Party"],
  },
  {
    _id: "4",
    name: "PARTY MAKEUP",
    // image: partyAirbrush,
    image: Party3,
    price: "11,000",
    description: "Airbrush",
    category: ["Party"],
  },
  {
    _id: "5",
    name: "SPECIAL OCCASION MAKEUP",
    // image: specialBasic,
    image: Photoshoot6,
    price: "9,999",
    description: "Basic",
    category: ["Special Occasion"],
  },
  {
    _id: "6",
    name: "SPECIAL OCCASION MAKEUP",
    // image: specialHD,
    image: Photoshoot4,
    price: "11,999",
    description: "HD",
    category: ["Special Occasion"],
  },
  {
    _id: "7",
    name: "SPECIAL OCCASION MAKEUP",
    // image: specialPremiumHD,
    image: Photoshoot7,
    price: "14,999",
    description: "Premium HD",
    category: ["Special Occasion"],
  },
  {
    _id: "8",
    name: "SPECIAL OCCASION MAKEUP",
    // image: specialAirbrush,
    image: Photoshoot12,
    price: "17,999",
    description: "Airbrush",
    category: ["Special Occasion"],
  },
  {
    _id: "9",
    name: "BRIDAL MAKEUP",
    // image: bridalBasic,
    image: Bridal1,
    price: "11,999",
    description: "Basic",
    category: ["Bridal"],
  },
  {
    _id: "10",
    name: "BRIDAL MAKEUP",
    // image: bridalHD,
    image: Bridal3,
    price: "14,999",
    description: "HD",
    category: ["Bridal"],
  },
  {
    _id: "11",
    name: "BRIDAL MAKEUP",
    // image: bridalPremiumHD,
    image: Bridal2,
    price: "17,999",
    description: "Premium HD",
    category: ["Bridal"],
  },
  {
    _id: "12",
    name: "BRIDAL MAKEUP",
    // image: bridalAirbrush,
    image: Bridal8,
    price: "24,999",
    description: "Airbrush",
    category: ["Bridal"],
  },
  {
    _id: "13",
    name: "BRIDAL MAKEUP",
    // image: bridalHDAirbrush,
    image: Bridal11,
    price: "29,999",
    description: "HD Airbrush",
    category: ["Bridal"],
  },
];

// PORTFOLIO EXPORT PHOTOS

// Bridal Export
export const bridalPhotos = {
  Bridal1,
  Bridal2,
  Bridal3,
  Bridal4,
  Bridal5,
  Bridal6,
  Bridal7,
  Bridal8,
  Bridal9,
  Bridal10,
  Bridal11,
};

// Photoshoot Export
export const photoshootPhotos = {
  Photoshoot1,
  Photoshoot2,
  Photoshoot3,
  Photoshoot4,
  Photoshoot5,
  Photoshoot6,
  Photoshoot7,
  Photoshoot8,
  Photoshoot9,
  Photoshoot10,
  Photoshoot11,
  Photoshoot12,
};

// Special Occasion Export
export const specialOccasionPhotos = {
  Special1,
  Special2,
  Special3,
};

// Party Export
export const partyPhotos = {
  Party1,
  Party2,
  Party3,
  Party4,
};
