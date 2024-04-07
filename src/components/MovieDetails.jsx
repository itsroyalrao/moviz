import PropTypes from "prop-types";

function MovieDetails({ movieDetails, screenWidth }) {
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
            <div className="text-4xl">{movieDetails.title}</div>
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
              href={`https://vidsrc.to/embed/movie/${movieDetails.id}`}
              className="bg-blue-600 p-4 text-2xl font-semibold rounded cursor-pointer flex justify-center hover:bg-blue-500"
            >
              Watch Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  screenWidth: PropTypes.number,
  movieDetails: PropTypes.object,
};

export default MovieDetails;
