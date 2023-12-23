import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import DisplayMovies from "../components/DisplayMovies";

function Genre({ active }) {
  const { name } = useParams();

  const [movies, setMovies] = useState(null);
  const [nextMovies, setNextMovies] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const tmdbGenres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const genreId = tmdbGenres.find((genre) => genre.name === name).id;

  const apiKey = import.meta.env.VITE_APIKEY;
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=${pageNumber}`;

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
  }, [name]);
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

Genre.propTypes = {
  active: PropTypes.string,
};

export default Genre;
