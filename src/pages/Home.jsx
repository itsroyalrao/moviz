import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { handleInfiniteScroll } from "../helper/handleInfiniteScroll";

function Home() {
  const [movies, setMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const movies = await getMovies(pageNumber);
      setMovies((prevMovies) =>
        prevMovies ? [...prevMovies, ...movies] : movies
      );

      console.log(movies);
    })();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleInfiniteScroll(setPageNumber)
    );
  }, []);

  return (
    <div className="h-[100svh] flex flex-col">
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 p-3">
        {movies &&
          movies.map((movie) => (
            <div key={Math.random()}>
              <Card
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
                overview={movie.overview}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
