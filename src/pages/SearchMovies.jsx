import { useParams } from "react-router-dom";
import DisplayMovies from "../components/DisplayMovies";
import PropTypes from "prop-types";

function SearchMovies({ active }) {
  const { query } = useParams();

  return (
    <>
      <DisplayMovies active={active} query={query} />
    </>
  );
}

SearchMovies.propTypes = {
  active: PropTypes.string,
};

export default SearchMovies;
