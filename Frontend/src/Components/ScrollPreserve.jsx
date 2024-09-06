import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePreserveScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save the current scroll position before navigating
    const currentScrollPosition = window.scrollY;

    // Restore the scroll position after navigating
    window.scrollTo(0, currentScrollPosition);
  }, [pathname]); // The effect runs every time the route changes
};

export default usePreserveScroll;
