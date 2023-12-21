import axios from "axios";

const apiKey = "74381893d3f7c586985415383c54bbf4";

async function getMovies(pageNumber) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.results;

    if (movies) {
      const imageUrlPromises = movies.map(async (movie) => {
        await fetchMovieVideos(movie.id);
        return await getImageUrl(movie.id);
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

const getImageUrl = async (movieId) => {
  try {
    const imageUrlBase = "https://image.tmdb.org/t/p/w500";
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    const response = await axios.get(apiUrl);
    if (response) {
      const movieData = response.data;

      if (movieData.poster_path) {
        const posterUrl = `${imageUrlBase}${movieData.poster_path}`;
        return posterUrl;
      } else {
        console.log("No poster available for this movie");
      }
    }
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

export { getMovies };
