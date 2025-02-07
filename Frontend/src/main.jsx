import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import PortfolioBridal from "./Components/PortfolioBridal.jsx";
import PortfolioParty from "./Components/PortfolioParty.jsx";
import PortfolioSpecial from "./Components/PortfolioSpecial.jsx";
import PortfolioPhoto from "./Components/PortfolioPhoto.jsx";
import ServicesTraning from "./Components/ServicesTraning.jsx";
import ServicesMain from "./Components/ServicesMain.jsx";
import PortfolioCommercial from "./Components/PortfolioCommercial.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Conditions from "./Pages/Conditions.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />}>
        <Route path="" element={<ServicesMain />} />
        <Route path="training" element={<ServicesTraning />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />}>
        <Route path="" element={<PortfolioBridal />} />
        <Route path="party" element={<PortfolioParty />} />
        <Route path="specialoccasion" element={<PortfolioSpecial />} />
        <Route path="photoshoot" element={<PortfolioPhoto />} />
        <Route path="commercial" element={<PortfolioCommercial />} />
      </Route>
      <Route path="privacypolicy" element={<Privacy />} />
      <Route path="termsconditions" element={<Conditions />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
