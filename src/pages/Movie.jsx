import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieVideos, getMovieDetails } from "../apis/getMovies";
import Navbar from "../components/Navbar";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import MovieDetails from "../components/MovieDetails";
// import VideoPlayer from "../components/VideoPlayer";

function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    (async () => {
      setMovieDetails((await getMovieDetails(id)).data);
      setVideos(await fetchMovieVideos(id));
    })();
  }, [id]);

  if (videos) {
    console.log(videos, 12121);
  }
  useEffect(() => {
    handleScreenWidth(setScreenWidth);
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="pt-3">
        {videos && (
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
            width="100%"
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

      {movieDetails && (
        <MovieDetails movieDetails={movieDetails} screenWidth={screenWidth} />
      )}
    </div>
  );
}

export default Movie;
