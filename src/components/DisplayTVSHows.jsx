import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import { handleInfiniteScroll } from "../helper/handleInfiniteScroll";

function DisplayTVShows({ type, movies, active, setPageNumber }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMovetoTop, setShowMovetoTop] = useState(false);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);

    window.addEventListener("scroll", () => {
      handleInfiniteScroll(setPageNumber);
      document.documentElement.scrollTop > 2000
        ? setShowMovetoTop(true)
        : setShowMovetoTop(false);
    });
  }, [screenWidth]);

  return (
    <div className="h-[100svh] flex flex-col">
      <Navbar active={active} />
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ${
          screenWidth > 678 ? "gap-4 p-5" : "gap-2 p-3"
        }`}
      >
        {movies &&
          movies.map((movie) => (
            <div key={Math.random()}>
              <Card
                type={type}
                id={movie.id}
                imageUrl={movie.imageUrl}
                title={movie.name}
                overview={movie.overview}
                voteAverage={movie.vote_average}
                duration={movie.duration}
                releaseDate={movie.releaseDate}
              />
            </div>
          ))}
      </div>
      {showMovetoTop && (
        <i
          className={`fas fa-arrow-up fixed ${
            screenWidth > 640 ? "bottom-9 right-12" : "bottom-5 right-4"
          } text-xl text-black bg-yellow-400 px-[19px] py-3 rounded-full cursor-pointer`}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      )}
    </div>
  );
}

DisplayTVShows.propTypes = {
  type: PropTypes.string,
  active: PropTypes.string,
  movies: PropTypes.any,
  setPageNumber: PropTypes.func,
};

export default DisplayTVShows;
