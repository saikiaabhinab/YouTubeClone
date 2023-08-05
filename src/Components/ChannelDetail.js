import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Videos, ChanneCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [vedio, setvedios] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setvedios(videosData?.items);
    };

    fetchResults();
  }, [id]);
  {
    console.log("mnbb", vedio);
  }
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,0,251,1) 0%, rgba(8,111,100,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChanneCard channeDetel={channelDetail} marginTop="-113px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />

        <Videos videos={vedio} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
