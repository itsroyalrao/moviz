import axios from "axios";

const apiKey = "74381893d3f7c586985415383c54bbf4";
const imageUrlBase = "https://image.tmdb.org/t/p/w500";

async function getMovies(pageNumber) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.results;

    if (movies) {
      const imageUrlPromises = movies.map(async (movie) => {
        const response = await getMovieDetails(movie.id);
        if (response.data.poster_path) {
          const imageUrl = `${imageUrlBase}${response.data.poster_path}`;
          return imageUrl;
        } else
          return "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
      });

      const imageUrls = await Promise.all(imageUrlPromises);

      movies.forEach((movie, index) => {
        movie.imageUrl = imageUrls[index];
      });

      return movies;
    }
  } catch (e) {
    console.log(e);
  }
}

const getMovieDetails = async (movieId) => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    const response = await axios.get(apiUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const fetchMovieVideos = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  );
  const data = await response.json();
  console.log(movieId, data);
  // return data.results; // Returns an array of videos for the movie
};

export { getMovies, getMovieDetails, fetchMovieVideos };
