import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Box, Stack, Typography, TextField, Input } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const VidioDeatail = () => {
  const { id } = useParams();

  console.log("video id", id);

  const [videoDatail, setvideoDatail] = useState(null);
  const [videos, setvideos] = useState(null);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDatail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);
  // console.log(videoDatail);
  // https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=M_NCXWVouz0
  // M_NCXWVouz0

  if (!videoDatail) return "Lodind..";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDatail;
  return (
    <Box minHegth="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={2}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Liks
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* <input
          type="text"
          height="400px"
          width="500px"
          Color="#fff"
          
        /> */}

        {/* <TextField
          Color="#fff"
          sx={{ height: "500px", width: "500px", backgroundColor: "#fff" }}
        /> */}

        {/* <Input
          Color="#fff"
          sx={{ height: "500px", width: "500px", backgroundColor: "#fff" }}
        /> */}

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VidioDeatail;
