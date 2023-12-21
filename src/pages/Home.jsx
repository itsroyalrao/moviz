import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

function Home() {
  const [movies, setMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    getMovies(setMovies, pageNumber, setTotalPage);
  }, [pageNumber]);

  return (
    <div className="h-[100svh] flex flex-col">
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 p-3">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <Card
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
                overview={movie.overview}
              />
            </div>
          ))}
      </div>
      <div className="pt-5 pb-12">
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
}

export default Home;
