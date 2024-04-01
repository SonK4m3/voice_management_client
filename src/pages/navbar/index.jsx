import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "../../components/FlextBetween";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import Profile from "./Profile";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    dispatch(authActions.logout());
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setSelected("dashboard");
      dispatch(authActions.loginSuccess({ accessToken: storedToken }));
    }
  }, [dispatch]);

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Sonkame
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box
          sx={{
            "&:hover": {
              color: "#d0fcf4",
            },
          }}
        >
          <Link
            to="/dashboard"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#d0fcf4",
            },
          }}
        >
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>

        {isLoggedIn ? (
          <FlexBetween gap={2}>
            <Profile />
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </FlexBetween>
        ) : (
          <Button
            variant="contained"
            href="/auth"
            onClick={() => {
              setSelected("auth");
            }}
          >
            Login
          </Button>
        )}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
