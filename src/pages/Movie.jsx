import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieVideos, getMovieDetails } from "../apis/getMovies";
import Navbar from "../components/Navbar";
import { handleScreenWidth } from "../helper/handleScreenWidth";
import VideoPlayer from "../components/VideoPlayer";

function Movie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    (async () => {
      setMovieDetails((await getMovieDetails(id)).data);
      fetchMovieVideos(id);
    })();
  }, [id]);

  useEffect(() => {
    handleScreenWidth(setScreenWidth);
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />

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
          <div className="w-full flex justify-center pb-20">
            <VideoPlayer
              videoId={id}
              height="240"
              width="320"
              screenWidth={screenWidth}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
