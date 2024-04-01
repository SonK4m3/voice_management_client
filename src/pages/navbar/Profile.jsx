import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import OverFlowGraphy from "../../components/OverFlowTypography";

const Profile = () => {
  const { name } = useSelector((state) => state.auth.user);

  return (
    <Box>
      <OverFlowGraphy variant="h4" component="h4">
        {name || "User001"}
      </OverFlowGraphy>
    </Box>
  );
};

export default Profile;
