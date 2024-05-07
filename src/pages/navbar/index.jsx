import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "../../components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";
import { openDrawer } from "../../store/drawerSlice";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    dispatch(authActions.logout());
  };

  const handleDrawerToggle = () => {
    dispatch(openDrawer());
  };

  return (
    <FlexBetween mb="0.25rem" p="0.25rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <IconButton
          aria-label="expanded drawler"
          color="primary"
          onClick={handleDrawerToggle}
        >
          <MenuIcon
            sx={{
              fontSize: "32px",
              padding: "5px",
              border: "1px solid",
              borderRadius: "6px",
            }}
          />
        </IconButton>
        <PixIcon sx={{ fontSize: "40px" }} />
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
            to="/home"
            onClick={() => setSelected("home")}
            style={{
              color: selected === "home" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Home
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
            to="/cdr"
            onClick={() => setSelected("cdr")}
            style={{
              color: selected === "cdr" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Cdr
          </Link>
        </Box>

        {isLoggedIn ? (
          <FlexBetween gap={2}>
            <Profile user={user} />
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </FlexBetween>
        ) : (
          <Link
            to="/auth"
            onClick={() => {
              setSelected("auth");
            }}
          >
            <Button variant="contained">Login</Button>
          </Link>
        )}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
