import React, { useState, useEffect } from "react";
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
import RemoveIcon from "@mui/icons-material/Remove";

import {
  useGetRolesQuery,
  useCreateRoleMutation,
  useUpdateActiveRolesMutation,
} from "../../../state/authorizeApi";
import ToastMessageResponse from "../../auth/ToastMessageResponse";
import ErrorIconButton from "../../../components/ErrorIconButton";
import FlexBetween from "../../../components/FlexBetween";

const initialToaseMessage = {
  show: false,
  severity: "",
  message: "",
};

const RoleManager = () => {
  const { data: roles, isSuccess, refetch: refetchRoles } = useGetRolesQuery();
  const [createRole] = useCreateRoleMutation();
  const [updateActiveRoles] = useUpdateActiveRolesMutation();
  const [preRoles, setPreRoles] = useState(null);

  const [isChecked, setIsChecked] = useState(false);
  const [toastMessage, setToastMessage] = useState(initialToaseMessage);

  const showToastMessageResponse = ({ severity, message }) => {
    setToastMessage({
      show: true,
      severity: severity,
      message: message,
    });
  };

  const handleCreateRole = async (newRoleName, callback) => {
    const newRole = {
      name: newRoleName,
    };
    //TODO: send request to server
    try {
      await createRole(newRole).unwrap();
      callback();
      refetchRoles();
    } catch (err) {
      showToastMessageResponse({
        severity: "",
        message: err.data?.message || err.message,
      });
    }
    // setRoles([...roles, newRole]);
    // setPreRoles([...roles, newRole]);
  };

  const compareModifiedRoles = (roles1, roles2) => {
    if (roles1.length !== roles2.length) return true;

    for (let i = 0; i < roles1.length; i++) {
      const role1 = roles1[i];
      const role2 = roles2[i];
      if (role1.id === role2.id && role1.is_active !== role2.is_active) {
        return true;
      }
    }

    return false;
  };

  const handleToggleRole = (roleId) => {
    const updatedRoles = preRoles.map((role) =>
      role.id === roleId ? { ...role, is_active: !role.is_active } : role
    );
    setPreRoles(updatedRoles);
    const hasModiferedRole = compareModifiedRoles(updatedRoles, roles);

    setIsChecked(hasModiferedRole);
  };

  const handleSave = async () => {
    //TODO: send role to server
    const changedRoles = [];

    for (let i = 0; i < roles.length; i++) {
      const role1 = roles[i];
      const role2 = preRoles[i];
      if (role1.id === role2.id && role1.is_active !== role2.is_active) {
        changedRoles.push(role2);
      }
    }

    if (changedRoles.length > 0) {
      try {
        await updateActiveRoles(changedRoles).unwrap;
        setIsChecked(false);
        showToastMessageResponse({
          severity: "success",
          message: "Success!",
        });
        refetchRoles();
      } catch (err) {
        showToastMessageResponse({
          severity: "error",
          message: err.data?.message || err.message,
        });
      }
    }
  };

  const handleRemoveRole = async (id) => {};

  useEffect(() => {
    if (isSuccess && roles) {
      setPreRoles(roles);
    }
  }, [roles, isSuccess]);

  return (
    <Box>
      <ToastMessageResponse
        toastMessageResponse={toastMessage}
        onClose={() => {
          setToastMessage(initialToaseMessage);
        }}
      />
      <Typography variant="h3" gutterBottom>
        Danh sách vị trí
      </Typography>
      <Box>
        <FormControl component="fieldset">
          {preRoles && (
            <FormGroup>
              {preRoles.map((role) => (
                <FlexBetween width="100%" key={role.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={role.is_active}
                        onChange={() => handleToggleRole(role.id)}
                      />
                    }
                    label={role.name}
                  />
                  <ErrorIconButton
                    aria-label="remove role"
                    onClick={() => handleRemoveRole(role.id)}
                  >
                    <RemoveIcon color="error" />
                  </ErrorIconButton>
                </FlexBetween>
              ))}
            </FormGroup>
          )}
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
        renderModal={({ handleClose }) => (
          <Box bgcolor="darkPallete.dark" p={4}>
            <Typography variant="h3">Thêm vị trí mới</Typography>
            <FlexCenter mt={3}>
              <CreateNewRoleForm
                onSubmit={(newRole) => handleCreateRole(newRole, handleClose)}
              />
            </FlexCenter>
          </Box>
        )}
      />
    </Box>
  );
};

export default RoleManager;
