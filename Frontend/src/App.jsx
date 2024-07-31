import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <div className="absolute top-0 w-full">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
