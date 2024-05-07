import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import FlexCenter from "../../components/FlexCenter";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FlexBetween from "../../components/FlexBetween";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Not Found";
  }, [location.pathname]);

  return (
    <FlexCenter
      width="100%"
      height="100%"
      sx={{
        position: "relative",
      }}
    >
      <FlexBetween
        width="10rem"
        sx={{
          zIndex: 10,
        }}
      >
        <ErrorOutlineIcon sx={{ color: "white", fontSize: "h2" }} />
        <Typography variant="h2" color="white">
          Not Found
        </Typography>
      </FlexBetween>
      <Box
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          display: "inline",
          fontWeight: "bold",
          position: "absolute",
          top: "10%",
          left: "50",
          zIndex: "0",
        }}
      >
        <Typography fontSize="12rem" color="textPrimary">
          404
        </Typography>
      </Box>
    </FlexCenter>
  );
};

export default NotFound;
