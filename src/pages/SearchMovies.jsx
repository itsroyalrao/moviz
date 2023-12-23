import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import DisplayMovies from "../components/DisplayMovies";

function SearchMovies({ active }) {
  const { query } = useParams();

  const [movies, setMovies] = useState(null);
  const [nextMovies, setNextMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const apiKey = import.meta.env.VITE_APIKEY;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}`;

  useEffect(() => {
    (async () => {
      if (!movies) {
        const moviesData = await getMovies(apiUrl, "movie");
        setMovies(moviesData);
        const nextMoviesData = await getMovies(apiUrl, "movie");
        setNextMovies(nextMoviesData);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...nextMovies]);
        const nextMoviesData = await getMovies(apiUrl, "movie");
        setNextMovies(nextMoviesData);
      }
    })();
  }, [apiUrl]);

  useEffect(() => {
    setMovies(null);
    (async () => {
      const moviesData = await getMovies(apiUrl, "movie");
      setMovies(moviesData);
      const nextMoviesData = await getMovies(apiUrl, "movie");
      setNextMovies(nextMoviesData);
    })();
  }, []);
  return (
    <>
      <DisplayMovies
        movies={movies}
        active={active}
        setPageNumber={setPageNumber}
        type={"movie"}
      />
    </>
  );
}

SearchMovies.propTypes = {
  active: PropTypes.string,
};

export default SearchMovies;
