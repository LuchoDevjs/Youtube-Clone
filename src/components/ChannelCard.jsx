import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/Constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ChannelCard = ({ channelDetail, mt }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "cemter",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        mt,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
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
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <CheckCircleIcon
              sx={{ fontSize: "16px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Suscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
