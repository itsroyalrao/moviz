import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieVideos, getMovieDetails } from "../apis/getMovies";
import Navbar from "../components/Navbar";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import VideoPlayer from "../components/VideoPlayer";

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

      <div className="">
        {videos && (
          <VideoPlayer
            videoId={videos[0].key}
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
            screenWidth={screenWidth}
          />
        )}
      </div>

      {movieDetails && (
        <div className="flex flex-col">
          <div
            className={`flex ${screenWidth <= 768 && "flex-col"} gap-6 p-12`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className={`${screenWidth <= 768 ? "w-full" : "w-48"}`}
            />
            <div className="flex flex-col gap-3 font-thin">
              <div className="text-4xl">{movieDetails.title}</div>
              <div className="grow opacity-80">{movieDetails.overview}</div>
              <div className={`flex ${screenWidth <= 640 && "flex-col"} gap-5`}>
                <div className="flex flex-col">
                  <div>Released: {movieDetails.release_date}</div>
                  <div>
                    Genre:{" "}
                    {movieDetails.genres.map((genre) => genre.name + " ")}
                  </div>
                  <div>Original title: {movieDetails.original_title}</div>
                </div>
                <div className="w-full flex flex-col">
                  <div>Duration: {movieDetails.runtime} min</div>
                  <div>
                    Country:{" "}
                    {movieDetails.production_countries.map(
                      (country) => country.name + " "
                    )}
                  </div>
                  <div>
                    Production:{" "}
                    {movieDetails.production_companies.map(
                      (company) => company.name + " "
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center gap-3">
            <div className="grid lg:grid-cols-2 gap-2">
              {videos &&
                videos.map((video) => (
                  <div key={Math.random()}>
                    <VideoPlayer
                      videoId={video.key}
                      height={screenWidth > 1020 ? "390" : "240"}
                      width={screenWidth > 1020 ? "620" : "320"}
                      screenWidth={screenWidth}
                    />
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Movie;
