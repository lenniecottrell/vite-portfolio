import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  //grab pathname from the location object
  const { pathname } = useLocation();

  //anytime the pathname changes, scroll the window back to the top
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
