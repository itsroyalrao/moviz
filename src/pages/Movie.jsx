import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieVideos, getMovieDetails } from "../apis/getMovies";
import Navbar from "../components/Navbar";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import MovieDetails from "../components/MovieDetails";

function Movie() {
  const { id, type } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    (async () => {
      setMovieDetails((await getMovieDetails(id, type)).data);
      setVideos(await getMovieVideos(id));
    })();
  }, [id]);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />

      {movieDetails && (
        <MovieDetails
          type={type}
          movieDetails={movieDetails}
          screenWidth={screenWidth}
        />
      )}
    </div>
  );
}

export default Movie;
