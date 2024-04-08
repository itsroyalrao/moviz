import PropTypes from "prop-types";
import { getEpisodesVideos } from "../apis/getMovies";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieDetails({ type, movieDetails, screenWidth }) {
  const [episodes, setEpisodes] = useState([]);

  return (
    <div className="flex flex-col">
      <div className={`flex ${screenWidth <= 768 && "flex-col"} gap-6 p-12`}>
        <div className="w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            className={`${screenWidth <= 768 ? "w-full rounded-t-xl" : "w-72"}`}
            alt={movieDetails.title}
          />
          {screenWidth <= 768 && (
            <a
              href={`https://vidsrc.to/embed/movie/${movieDetails.id}`}
              className="bg-blue-600 p-4 text-2xl font-semibold rounded-b-xl cursor-pointer flex justify-center hover:bg-blue-500"
            >
              Watch Now
            </a>
          )}
        </div>
        <div className="flex flex-col justify-between font-thin">
          <div className="flex flex-col gap-3">
            <div className="text-4xl">
              {type === "movie" ? movieDetails.title : movieDetails.name}
            </div>
            <div className="opacity-80">{movieDetails.overview}</div>
          </div>
          <div className={`flex ${screenWidth <= 640 && "flex-col"} gap-5`}>
            <div className="flex flex-col">
              <div>Released: {movieDetails.release_date}</div>
              <div>
                Genre: {movieDetails.genres.map((genre) => genre.name + " ")}
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
          {screenWidth > 768 && (
            <a
              href={
                type === "movie"
                  ? `https://vidsrc.to/embed/movie/${movieDetails.id}`
                  : `https://vidsrc.xyz/embed/tv/${movieDetails.id}`
              }
              className="bg-blue-600 p-4 text-2xl font-semibold rounded cursor-pointer flex justify-center hover:bg-blue-500"
            >
              Watch Now
            </a>
          )}
        </div>
      </div>
      {type === "tv_shows" && (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2 p-2 m-4 bg-[#242424] rounded">
            {episodes.map((item) => (
              <Link
                to={`https://vidsrc.to/embed/tv/${item.id}/${item.season_number}/${item.episode_number}`}
                key={item.id}
                className="bg-black font-semibold p-4 rounded hover:scale-105 cursor-pointer"
              >
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2 p-4">
            {movieDetails.seasons.map((item) => (
              <div key={item.id}>
                <div
                  className="bg-yellow-400 text-black font-semibold p-4 rounded hover:scale-105 cursor-pointer"
                  onClick={async () => {
                    const result = await getEpisodesVideos(
                      item.id,
                      item.season_number
                    );
                    setEpisodes(result.data.episodes);
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  type: PropTypes.string,
  screenWidth: PropTypes.number,
  movieDetails: PropTypes.object,
};

export default MovieDetails;
