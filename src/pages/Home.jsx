import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { handleInfiniteScroll } from "../helper/handleInfiniteScroll";
import { handleScreenWidth } from "../helper/handleScreenWidth";

function Home() {
  const [movies, setMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showMovetoTop, setShowMovetoTop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    (async () => {
      const movies = await getMovies(pageNumber);
      setMovies((prevMovies) =>
        prevMovies ? [...prevMovies, ...movies] : movies
      );
    })();
  }, [pageNumber]);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);

    window.addEventListener("scroll", () => {
      handleInfiniteScroll(setPageNumber);
      document.documentElement.scrollTop > 2000
        ? setShowMovetoTop(true)
        : setShowMovetoTop(false);
    });
  }, []);

  return (
    <div className="h-[100svh] flex flex-col">
      <Navbar pageNumber={pageNumber} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 p-3">
        {movies &&
          movies.map((movie) => (
            <div key={Math.random()}>
              <Card
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
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
          } text-xl bg-yellow-400 px-[19px] py-3 rounded-full cursor-pointer`}
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

export default Home;
