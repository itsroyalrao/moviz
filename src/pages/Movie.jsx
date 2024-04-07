import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieVideos, getMovieDetails } from "../apis/getMovies";
import Navbar from "../components/Navbar";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import MovieDetails from "../components/MovieDetails";
// import VideoPlayer from "../components/VideoPlayer";

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
        <MovieDetails movieDetails={movieDetails} screenWidth={screenWidth} />
      )}

      <div className="pb-9 flex justify-center">
        {videos && (
          <iframe
            title="video-player"
            height={
              screenWidth > 1024
                ? "512"
                : screenWidth > 768
                ? "384"
                : screenWidth > 640
                ? "320"
                : "240"
            }
            width="94%"
            src={`https://www.youtube.com/embed/${
              videos.length
                ? videos.find((movie) => movie.type === "Trailer").key
                : ""
            }`}
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default Movie;

// <VideoPlayer
//   videoId={
//     videos.length
//       ? videos.find((movie) => movie.type === "Trailer").key
//       : ""
//   }
//   height={
//     screenWidth > 1024
//       ? "640"
//       : screenWidth > 768
//       ? "360"
//       : screenWidth > 640
//       ? "320"
//       : "240"
//   }
//   width="100%"
// />
