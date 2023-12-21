import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieVideos, getMovieDetails } from "../apis/getMovies";

function Movie() {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const movieDetails = await getMovieDetails(id);
      fetchMovieVideos(id);
      console.log("movieDetails", movieDetails);
    })();
  }, [id]);
  return <div>Movie {id} </div>;
}

export default Movie;
