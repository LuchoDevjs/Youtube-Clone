import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box minHeight="95vh">
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          Search Results for:{" "}
          <span style={{ color: "#0000FF" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
