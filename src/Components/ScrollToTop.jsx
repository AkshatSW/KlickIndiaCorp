// src/Components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll main page container to top
    const scrollContainer = document.scrollingElement || document.documentElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // smooth scroll
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
