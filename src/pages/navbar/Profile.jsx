import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import OverFlowGraphy from "../../components/OverFlowTypography";
import Stack from "@mui/material/Stack";

const Profile = () => {
  const { name, role } = useSelector((state) => state.auth.user);

  return (
    <Box>
      <Stack spacing={2}>
        <OverFlowGraphy variant="h4" component="h4">
          {name || "User001"}
        </OverFlowGraphy>
        <OverFlowGraphy
          variant="caption"
          color={role === "user" ? "beige" : "green"}
        >
          {role || ""}
        </OverFlowGraphy>
      </Stack>
    </Box>
  );
};

export default Profile;
