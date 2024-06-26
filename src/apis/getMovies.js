import axios from "axios";

const apiKey = import.meta.env.VITE_APIKEY;

async function getMovies(apiUrl, type = "movie") {
  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.results;

    if (movies) {
      const imageUrlPromises = movies.map(async (movie) => {
        const response = await getMovieDetails(movie.id, type);

        if (response.data.poster_path) {
          const imageUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
          return {
            imageUrl,
            duration: response.data.runtime,
            releaseDate: response.data.release_date,
          };
        } else
          return {
            imageUrl:
              "https://www.tgv.com.my/assets/images/404/movie-poster.jpg",
            duration: response.data.runtime,
            releaseDate: response.data.release_date,
          };
      });

      const imageUrls = await Promise.all(imageUrlPromises);

      movies.forEach((movie, index) => {
        movie.imageUrl = imageUrls[index].imageUrl;
        movie.duration = imageUrls[index].duration;
        movie.releaseDate = imageUrls[index].releaseDate;
      });

      return movies;
    }
  } catch (e) {
    console.log(e);
  }
}

const getMovieDetails = async (movieId, type) => {
  try {
    let apiUrl;
    if (type === "movie")
      apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    else
      apiUrl = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${apiKey}&language=en-US`;

    const response = await axios.get(apiUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const getMovieVideos = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
    );
    return response.data.results;

    // const response = await fetch(
    //   `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
    // );
    // const data = await response.json();
    // return data.results;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const getEpisodesVideos = async (tvShowId, seasonNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonNumber}?api_key=${apiKey}`
    );
    return response;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export { getMovies, getMovieDetails, getMovieVideos, getEpisodesVideos };
