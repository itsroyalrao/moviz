import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import DisplayMovies from "../components/DisplayMovies";

function TVShows({ active }) {
  const [movies, setMovies] = useState(null);
  const [nextMovies, setNextMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const apiKey = import.meta.env.VITE_APIKEY;
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`;

  useEffect(() => {
    (async () => {
      if (!movies) {
        const moviesData = await getMovies(apiUrl, "tv_shows");
        setMovies(moviesData);
        const nextMoviesData = await getMovies(apiUrl, "tv_shows");
        setNextMovies(nextMoviesData);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...nextMovies]);
        const nextMoviesData = await getMovies(apiUrl, "tv_shows");
        setNextMovies(nextMoviesData);
      }
    })();
  }, [apiUrl]);
  return (
    <>
      <DisplayMovies
        movies={movies}
        active={active}
        setPageNumber={setPageNumber}
        type={"tv_shows"}
      />
    </>
  );
}

TVShows.propTypes = {
  active: PropTypes.string,
};

export default TVShows;
