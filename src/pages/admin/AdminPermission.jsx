import { Box, Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../../components/FlexBetween";
import PermissionForm from "./PermissionForm";

const AdminPermission = () => {
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
    // Add more roles as needed
  ];

  const permissions = [
    { id: 1, name: "Create" },
    { id: 2, name: "Read" },
    // Add more permissions as needed
  ];

  return (
    <Box width="100%" height="100%">
      <FlexBetween>
        <Typography variant="body1" color="initial">
          User
        </Typography>
      </FlexBetween>
      <Box width="100%" height="100%" mt={1}>
        <PermissionForm roles={roles} permissions={permissions} />
      </Box>
    </Box>
  );
};

export default AdminPermission;
