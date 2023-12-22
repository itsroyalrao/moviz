import PropTypes from "prop-types";
import DisplayMovies from "../components/DisplayMovies";

function Home({ active }) {
  return (
    <>
      <DisplayMovies active={active} query={null} />
    </>
  );
}

Home.propTypes = {
  active: PropTypes.string,
};

export default Home;
