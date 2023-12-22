import { useState } from "react";
import { Link } from "react-router-dom";

function MobileView() {
  const [showItems, setShowItems] = useState(false);
  const [clicked, setClicked] = useState("home");

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-4 py-3 bg-[#121212] text-2xl sticky top-0">
        <Link to={"/"} className="font-bold text-yellow-400">
          Moviez
        </Link>
        <i
          className={`fas fa-bars text-yellow-400 ${
            showItems && "transform transition-transform rotate-90"
          }`}
          onClick={() => setShowItems(!showItems)}
        ></i>
      </div>
      {showItems && (
        <>
          <div className="px-4 py-2 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-user"></i>
                <Link
                  to={"#"}
                  className={`text-xl ${
                    clicked === "profile" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("profile")}
                >
                  Profile
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-home"></i>
                <Link
                  to={"/"}
                  className={`text-xl ${
                    clicked === "home" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("home")}
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-film"></i>
                <Link
                  to={"#"}
                  className={`text-xl ${
                    clicked === "movies" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("movies")}
                >
                  Movies
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-tv"></i>
                <Link
                  to={"#"}
                  className={`text-xl ${
                    clicked === "tv_shows" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("tv_shows")}
                >
                  Tv Shows
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bars-staggered"></i>
                <Link
                  to={"#"}
                  className={`text-xl ${
                    clicked === "genre" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("genre")}
                >
                  Genre
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bolt"></i>
                <Link
                  to={"#"}
                  className={`text-xl ${
                    clicked === "top_rated" ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setClicked("top_rated")}
                >
                  Top Rated
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="w-full flex items-center p-1">
        <input
          type="text"
          className="w-full px-3 py-[6px] text-black rounded-s focus:outline-none"
          placeholder="Search..."
        />
        <i className="fas fa-search text-2xl text-black bg-yellow-400 px-2 py-[2px] rounded-e cursor-pointer"></i>
      </div>
    </div>
  );
}

export default MobileView;
