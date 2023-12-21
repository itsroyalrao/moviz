import PropTypes from "prop-types";
import YouTube from "react-youtube";

const VideoPlayer = ({ height, width, screenWidth }) => {
  const videoId = "vCcGYxy6PNA";

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={{
          height: screenWidth > 720 ? "390" : height,
          width: screenWidth > 720 ? "640" : width,
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }}
        onReady={onReady}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  videoId: PropTypes.string,
  screenWidth: PropTypes.number,
};

export default VideoPlayer;
