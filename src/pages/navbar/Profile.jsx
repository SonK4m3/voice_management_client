import React from "react";
import { Box } from "@mui/material";
import OverFlowGraphy from "../../components/OverFlowTypography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  if (user === null) return;

  const { name, role } = user;

  return (
    <Box>
      <Stack spacing={2}>
        <OverFlowGraphy variant="h4" component="h4">
          {name || "User001"}
        </OverFlowGraphy>
        <OverFlowGraphy
          variant="caption"
          color={role === "admin" ? "green" : "beige"}
        >
          {(role &&
            (role === "admin" ? (
              <Link
                to="/admin"
                style={{
                  color: "green",
                }}
              >
                admin
              </Link>
            ) : (
              role
            ))) ||
            ""}
        </OverFlowGraphy>
      </Stack>
    </Box>
  );
};

export default Profile;
