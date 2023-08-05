import React from "react";
import {
  Box,
  CardContent,
  cardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/Constance";

const ChanneCard = ({ channeDetel, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        heigth: "326px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channeDetel?.id?.channelId}`}>
        {console.log(channeDetel)}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channeDetel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channeDetel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channeDetel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channeDetel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channeDetel?.statistics?.subscriberCount
              ).toLocaleString()}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChanneCard;
