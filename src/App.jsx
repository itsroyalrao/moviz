import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import Genre from "./pages/Genre";
import SearchMovies from "./pages/SearchMovies";
import Latest from "./pages/Latest";
import TVShows from "./pages/TVShows";
import FutureGlimpse from "./pages/FutureGlimpse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home active={"home"} />} />
        <Route path="/genre/:name" element={<Genre active={"genre"} />} />
        <Route path="/tv_shows" element={<TVShows active={"tv_shows"} />} />
        <Route path="/latest" element={<Latest active={"latest"} />} />
        <Route path="/top" element={<TopRated active={"top_rated"} />} />
        <Route path="/future" element={<FutureGlimpse active={"future"} />} />
        <Route path="/movie/:id/:type" element={<Movie />} />
        <Route
          path="/search/:query"
          element={<SearchMovies active={"search"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
