import LaptopView from "./LaptopView";
import { useState } from "react";
import MobileView from "./MobileView";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = () => setScreenWidth(window.innerWidth);
  console.log(screenWidth);

  return <>{screenWidth > 1024 ? <LaptopView /> : <MobileView />}</>;
}
export default Navbar;
