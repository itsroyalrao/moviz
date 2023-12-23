import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";

function LaptopView({ active }) {
  const navigate = useNavigate();

  const [displayGenre, setDisplayGenre] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="px-9 py-3 flex justify-between items-center ">
      <Link to={"/"} className="font-bold text-3xl text-yellow-400">
        Moviiz
      </Link>
      <div className="flex items-center gap-7 text-xl">
        <Link
          to={"/"}
          className={`font-bold hover:text-yellow-400 ${
            active === "home" ? "text-yellow-400" : ""
          }`}
        >
          Now Playing
        </Link>
        <div
          onMouseEnter={() => setDisplayGenre(true)}
          onMouseLeave={() => setDisplayGenre(false)}
        >
          <Link
            to={"#"}
            className={`font-bold hover:text-yellow-400 ${
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
          to={"/tv_shows"}
          className={`font-bold hover:text-yellow-400 ${
            active === "tv_shows" ? "text-yellow-400" : ""
          }`}
        >
          TV Shows
        </Link>
        <Link
          to={"/top"}
          className={`font-bold hover:text-yellow-400 ${
            active === "top_rated" ? "text-yellow-400" : ""
          }`}
        >
          Top Rated
        </Link>
        <Link
          to={"/latest"}
          className={`font-bold hover:text-yellow-400 ${
            active === "latest" ? "text-yellow-400" : ""
          }`}
        >
          Upcoming
        </Link>
        <Link
          to={"/future"}
          className={`font-bold hover:text-yellow-400 ${
            active === "future" ? "text-yellow-400" : ""
          }`}
        >
          Future
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          {showInput && (
            <input
              type="text"
              className={`w-40 px-5 py-[6px] text-black rounded-s-full focus:outline-none`}
              placeholder="Search..."
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (query) navigate(`/search/${query}`);
                  setQuery("");
                }
              }}
            />
          )}
          <Link
            to={showInput && query && `/search/${query}`}
            className={`fas fa-search text-2xl cursor-pointer text-black bg-yellow-400 px-[6px] py-[2px] ${
              showInput ? "rounded-e-full" : "rounded-full"
            }`}
            onClick={() => {
              setShowInput((prevShowInput) => !prevShowInput);
            }}
          ></Link>
        </div>
        {/* <div className="flex items-center">
          <input
            type="text"
            className={`w-[0px] px-5 py-[6px] text-black rounded-s-full focus:outline-none transition-all duration-500`}
            placeholder="Search..."
            style={{
              width: showInput ? "160px" : "0px",
              opacity: showInput ? 1 : 0,
              marginLeft: showInput ? "5px" : "0px",
            }}
          />
          <i
            className={`fas fa-search text-2xl cursor-pointer px-[6px] py-[2px] ${
              showInput
                ? "rounded-e-full text-black bg-yellow-400"
                : "hover:text-yellow-400"
            }`}
            onClick={() => setShowInput((prevShowInput) => !prevShowInput)}
          ></i>
        </div> */}
        <Link className="fas fa-user-circle text-4xl text-yellow-400"></Link>
      </div>
    </div>
  );
}

LaptopView.propTypes = {
  active: PropTypes.string,
};

export default LaptopView;
