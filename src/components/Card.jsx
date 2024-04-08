import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({
  type,
  id,
  imageUrl,
  title,
  overview,
  voteAverage,
  duration,
  releaseDate,
}) {

  return (
    <Link
      to={`/movie/${id}/${type}`}
      className="flex flex-col hover:scale-110 transition-transform duration-300 ease-in-out"
      title={title}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`grow h-72 rounded-t`}
      />
      <div
        className={`p-2 pt-1 bg-black rounded-b`}
      >
        <div className="truncate">{title}</div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  duration: PropTypes.number,
};

export default Card;

// if (releaseDate) {
//   var [year] = releaseDate.split("-");
// }

{
  /* <div className="flex justify-between text-gray-300 text-sm">
  <div className="bg-zinc-800 px-2 rounded">{voteAverage}</div>
  <div>{duration}m</div>
  <div> {year} </div>
  </div> */
}
