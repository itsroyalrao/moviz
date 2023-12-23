import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";

function MobileView({ active }) {
  const navigate = useNavigate();

  const [showItems, setShowItems] = useState(false);
  const [displayGenre, setDisplayGenre] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-4 py-3 bg-[#121212] text-2xl sticky top-0">
        <Link to={"/"} className="font-bold text-yellow-400">
          Moviiz
        </Link>
        <i
          className={`fas fa-bars text-yellow-400 cursor-pointer ${
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
                    active === "profile" ? "text-yellow-400" : ""
                  }`}
                >
                  Profile
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fa-regular fa-circle-play"></i>
                <Link
                  to={"/"}
                  className={`text-xl ${
                    active === "home" ? "text-yellow-400" : ""
                  }`}
                >
                  Now Playing
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-tv"></i>
                <Link
                  to={"/tv_shows"}
                  className={`text-xl ${
                    active === "tv_shows" ? "text-yellow-400" : ""
                  }`}
                >
                  TV Shows
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fa-solid fa-circle-nodes"></i>
                <Link
                  to={"/latest"}
                  className={`text-xl ${
                    active === "latest" ? "text-yellow-400" : ""
                  }`}
                >
                  Upcoming
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bolt"></i>
                <Link
                  to={"/top"}
                  className={`text-xl ${
                    active === "top_rated" ? "text-yellow-400" : ""
                  }`}
                >
                  Top Rated
                </Link>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bars-staggered"></i>
                <div
                  className={`font-bold text-xl sm:hover:text-yellow-400 ${
                    active === "genre" ? "text-yellow-400" : ""
                  } cursor-pointer`}
                  onClick={() => setDisplayGenre(!displayGenre)}
                >
                  Genre
                </div>
              </div>
            </div>
            {displayGenre && (
              <div className="">
                <DisplayGenre />
              </div>
            )}
          </div>
        </>
      )}
      <div className="w-full flex items-center px-4">
        <input
          type="text"
          className="w-full px-3 py-[6px] text-black rounded-s focus:outline-none"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (query) navigate(`/search/${query}`);
              setQuery("");
            }
          }}
        />
        <Link
          to={`/search/${query}`}
          className="fas fa-search text-2xl text-black bg-yellow-400 px-2 py-[2px] rounded-e cursor-pointer"
        ></Link>
      </div>
    </div>
  );
}

MobileView.propTypes = {
  active: PropTypes.string,
};

export default MobileView;
