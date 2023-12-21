import axios from "axios";

const apiKey = "74381893d3f7c586985415383c54bbf4";

async function getMovies(setMovies, pageNumber, setTotalPage) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    const movies = response.data.results;
    if (movies) {
      const imageUrlPromises = movies.map(async (movie) => {
        return await getImageUrl(movie.id);
      });

      const imageUrls = await Promise.all(imageUrlPromises);

      movies.forEach((movie, index) => {
        movie.imageUrl = imageUrls[index];
      });

      setMovies(movies);
      setTotalPage(response.data.total_pages);
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

export { getMovies };
