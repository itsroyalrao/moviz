import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";

function LaptopView({ active }) {
  const [displayGenre, setDisplayGenre] = useState(false);

  return (
    <div className="px-12 py-3 flex justify-between items-center ">
      <Link to={"/"} className="font-bold text-3xl text-yellow-400">
        Moviez
      </Link>
      <div className="flex items-center gap-7 text-xl">
        <Link
          to={"/"}
          className={`font-bold ${active === "home" ? "text-yellow-400" : ""}`}
        >
          Home
        </Link>
        <div
          onMouseEnter={() => setDisplayGenre(true)}
          onMouseLeave={() => setDisplayGenre(false)}
        >
          <Link
            to={"#"}
            className={`font-bold  ${
              active === "genre" ? "text-yellow-400" : ""
            }`}
          >
            Genre
          </Link>
          {displayGenre && (
            <div className="absolute pt-5">
              <DisplayGenre />
            </div>
          )}
        </div>
        <Link
          to={"#"}
          className={`font-bold ${
            active === "movies" ? "text-yellow-400" : ""
          }`}
        >
          Movies
        </Link>
        <Link
          to={"#"}
          className={`font-bold ${
            active === "tv_shows" ? "text-yellow-400" : ""
          }`}
        >
          Tv Shows
        </Link>
        <Link
          to={"/top"}
          className={`font-bold ${
            active === "top_rated" ? "text-yellow-400" : ""
          }`}
        >
          Top Rated
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <i className="fas fa-search text-2xl"></i>
        <i className="fas fa-user-circle text-4xl text-yellow-400"></i>
      </div>
    </div>
  );
}

LaptopView.propTypes = {
  active: PropTypes.string,
};

export default LaptopView;
