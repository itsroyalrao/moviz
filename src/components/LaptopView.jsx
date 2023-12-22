import { useState } from "react";
import { Link } from "react-router-dom";

function LaptopView() {
  const [clicked, setClicked] = useState("home");

  return (
    <div className="px-12 py-3 flex justify-between items-center ">
      <Link to={"/"} className="font-bold text-3xl text-yellow-400">
        Moviez
      </Link>
      <div className="flex items-center gap-7 text-xl">
        <Link
          to={"/"}
          className={`font-bold ${clicked === "home" ? "text-yellow-400" : ""}`}
          onClick={() => setClicked("home")}
        >
          Home
        </Link>
        <Link
          to={"#"}
          className={`font-bold ${
            clicked === "movies" ? "text-yellow-400" : ""
          }`}
          onClick={() => setClicked("movies")}
        >
          Movies
        </Link>
        <Link
          to={"#"}
          className={`font-bold ${
            clicked === "tv_shows" ? "text-yellow-400" : ""
          }`}
          onClick={() => setClicked("tv_shows")}
        >
          Tv Shows
        </Link>
        <Link
          to={"#"}
          className={`font-bold ${
            clicked === "genre" ? "text-yellow-400" : ""
          }`}
          onClick={() => setClicked("genre")}
        >
          Genre
        </Link>
        <Link
          to={"#"}
          className={`font-bold ${
            clicked === "top_rated" ? "text-yellow-400" : ""
          }`}
          onClick={() => setClicked("top_rated")}
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

export default LaptopView;
