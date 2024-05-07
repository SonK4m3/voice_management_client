import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const PermissionForm = ({ roles, permissions }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleRoleChange = (event) => {
    const roleName = event.target.name;
    if (event.target.checked) {
      setSelectedRoles([...selectedRoles, roleName]);
    } else {
      setSelectedRoles(selectedRoles.filter((role) => role !== roleName));
    }
  };

  const handlePermissionChange = (event) => {
    const permissionName = event.target.name;
    if (event.target.checked) {
      setSelectedPermissions([...selectedPermissions, permissionName]);
    } else {
      setSelectedPermissions(
        selectedPermissions.filter(
          (permission) => permission !== permissionName
        )
      );
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">Roles</Typography>
          <FormGroup>
            {roles.map((role) => (
              <FormControlLabel
                key={role.id}
                control={
                  <Checkbox
                    checked={selectedRoles.includes(role.name)}
                    onChange={handleRoleChange}
                    name={role.name}
                  />
                }
                label={role.name}
              />
            ))}
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Permissions</Typography>
          <FormGroup>
            {permissions.map((permission) => (
              <FormControlLabel
                key={permission.id}
                control={
                  <Checkbox
                    checked={selectedPermissions.includes(permission.name)}
                    onChange={handlePermissionChange}
                    name={permission.name}
                  />
                }
                label={permission.name}
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PermissionForm;
