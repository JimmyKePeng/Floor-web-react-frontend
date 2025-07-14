import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top when pathname changes
  }, [pathname]); // run this effect whenever pathname changes

  return null; // this component doesn't render anything
}
