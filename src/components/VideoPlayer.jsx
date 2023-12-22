import PropTypes from "prop-types";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, height, width }) => {
  // const videoId = "vCcGYxy6PNA";

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube
        videoId={videoId.toString()}
        opts={{
          height,
          width,
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            mute: 1,
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
};

export default VideoPlayer;
