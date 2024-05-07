import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CreateNewRoleForm from "./CreateNewRoleForm";
import AddIcon from "@mui/icons-material/Add";
import FlexCenter from "../../../components/FlexCenter";
import ButtonModal from "../../components/ButtonModal";

const ROLES = [
  { id: 1, name: "Admin", isActive: true },
  { id: 2, name: "User", isActive: false },
  { id: 3, name: "Manager", isActive: true },
  { id: 4, name: "Guest", isActive: true },
  { id: 5, name: "Superuser", isActive: true },
];

const RoleManager = () => {
  const [roles, setRoles] = useState(ROLES);
  const [preRoles, setPreRoles] = useState(ROLES);

  const [isChecked, setIsChecked] = useState(false);

  const handleCreateRole = (newRoleName) => {
    const newRole = {
      id: roles.length + 1,
      name: newRoleName,
      isActive: true,
    };

    //TODO: send request to server

    setRoles([...roles, newRole]);
    setPreRoles([...roles, newRole]);
  };

  const compareModifiedRoles = (roles1, roles2) => {
    if (roles1.length !== roles2.length) return true;

    for (let i = 0; i < roles1.length; i++) {
      const role1 = roles1[i];
      const role2 = roles2[i];
      if (role1.id === role2.id && role1.isActive !== role2.isActive) {
        return true;
      }
    }

    return false;
  };

  const handleToggleRole = (roleId) => {
    const updatedRoles = roles.map((role) =>
      role.id === roleId ? { ...role, isActive: !role.isActive } : role
    );
    setRoles(updatedRoles);
    const hasModiferedRole = compareModifiedRoles(updatedRoles, preRoles);

    setIsChecked(hasModiferedRole);
  };

  const handleSave = () => {
    //TODO: send role to server
    setIsChecked(false);

    setPreRoles(roles);
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Danh sách vị trí
      </Typography>
      <Box>
        <FormControl component="fieldset">
          <FormGroup>
            {roles.map((role) => (
              <FormControlLabel
                key={role.id}
                control={
                  <Checkbox
                    checked={role.isActive}
                    onChange={() => handleToggleRole(role.id)}
                  />
                }
                label={role.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      {isChecked && <Button onClick={handleSave}>Lưu thay đổi</Button>}
      <ButtonModal
        renderButton={
          <FlexCenter>
            <AddIcon />
            <Typography variant="button">Vị trí mới</Typography>
          </FlexCenter>
        }
        renderModal={
          <Box bgcolor="darkPallete.dark" p={4}>
            <Typography variant="h3">Thêm vị trí mới</Typography>
            <FlexCenter mt={3}>
              <CreateNewRoleForm onSubmit={handleCreateRole} />
            </FlexCenter>
          </Box>
        }
      />
    </Box>
  );
};

export default RoleManager;
