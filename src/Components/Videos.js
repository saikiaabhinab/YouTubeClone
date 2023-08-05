import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChanneCard from "./ChanneCard";

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  if (!videos?.length) return "Loding..";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((items, idx) => {
        return (
          <Box key={idx}>
            {items.id.videoId && <VideoCard video={items} />}
            {items.id.channelId && <ChanneCard channeDetel={items} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
