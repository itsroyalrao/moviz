import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({
  type,
  id,
  imageUrl,
  title,
  voteAverage,
  duration,
  releaseDate,
}) {
  if (releaseDate) {
    var [year] = releaseDate.split("-");
  }
  return (
    <Link to={`/movie/${id}/${type}`} className="flex flex-col" title={title}>
      <img src={imageUrl} alt={title} className="grow" />
      <div className="p-2 pt-1">
        <div className="truncate">{title}</div>
        <div className="flex justify-between text-gray-300 text-sm">
          <div className="bg-zinc-800 px-2 rounded">{voteAverage}</div>
          <div>{duration}m</div>
          <div> {year} </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  duration: PropTypes.number,
};

export default Card;
