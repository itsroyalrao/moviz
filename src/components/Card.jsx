import PropTypes from "prop-types";

function Card({ id, imageUrl, title, overview, voteAverage }) {
  return (
    <div className="cursor-pointer overflow-hidden" title={title}>
      <img src={imageUrl} alt={title} className="" />
      <div className="p-2 truncate">{title}</div>
      <div>IMDB - {voteAverage}</div>
      {/* <div>Movie Id : {id} </div> */}
      {/* <div>Movie Overview : {overview} </div> */}
    </div>
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
