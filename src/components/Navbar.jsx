import PropTypes from "prop-types";
import LaptopView from "./LaptopView";
import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { handleScreenWidth } from "../helper/handleScreenWidth";

function Navbar({ active }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);
  }, []);
  return (
    <>
      {screenWidth > 1024 ? (
        <LaptopView active={active} />
      ) : (
        <MobileView active={active} />
      )}
    </>
  );
}

Navbar.propTypes = {
  active: PropTypes.string,
};

export default Navbar;
