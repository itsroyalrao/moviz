import PropTypes from "prop-types";
import DisplayMovies from "../components/DisplayMovies";

function TopRated({ active }) {
  return (
    <>
      <DisplayMovies active={active} />
    </>
  );
}

TopRated.propTypes = {
  active: PropTypes.string,
};

export default TopRated;
