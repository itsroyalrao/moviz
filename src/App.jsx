import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import Genre from "./pages/Genre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home active={"home"} />} />
        <Route path="/top" element={<TopRated active={"top_rated"} />} />
        <Route path="/genre/:name" element={<Genre active={"genre"} />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
