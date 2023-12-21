import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, imageUrl, title, overview, voteAverage }) {
  return (
    <Link to={`/movie/${id}`} className="" title={title}>
      <img src={imageUrl} alt={title} className="" />
      <div className="p-2 pt-1">
        <div className="truncate">{title}</div>
        <div>IMDB - {voteAverage}</div>
        {/* <div>Movie Id : {id} </div> */}
      </div>
      {/* <div>Movie Overview : {overview} </div> */}
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  voteAverage: PropTypes.number,
};

export default Card;
