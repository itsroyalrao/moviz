import LaptopView from "./LaptopView";
import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { handleScreenWidth } from "../helper/handleScreenWidth";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);
  }, []);
  return <>{screenWidth > 1024 ? <LaptopView /> : <MobileView />}</>;
}
export default Navbar;
