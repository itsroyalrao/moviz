import PropTypes from "prop-types";

function Card({ id, imageUrl, title, overview }) {
  return (
    <div className={`cursor-pointer overflow-hidden`} title={title}>
      <img src={imageUrl} alt={title} className="" />
      <div className="p-2 truncate">{title}</div>
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
};

export default Card;
