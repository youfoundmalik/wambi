import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  url,
  sx,
  controls = false,
  autoPlay = false,
  loop = false,
  muted = false,
  config,
}) => {
  return (
    <Box sx={sx} className="bg-off-white">
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        controls={controls}
        playing={autoPlay}
        loop={loop}
        muted={muted}
        config={config}
      />
    </Box>
  );
};

export default VideoPlayer;
