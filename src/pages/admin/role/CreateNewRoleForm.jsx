import { Button, FormControl, FormGroup } from "@mui/material";
import React, { useState } from "react";
import OutlineInput from "../../../components/OutlineInput";
import FlexBox from "../../../components/FlexBox";

const CreateNewRoleForm = ({ onSubmit }) => {
  const [newRole, setNewRole] = useState("");

  const handleCreateRole = () => {
    if (newRole.trim() !== "") {
      onSubmit(newRole);
      setNewRole("");
    }
  };

  return (
    <FormControl>
      <FormGroup>
        <FlexBox gap={2}>
          <OutlineInput
            id="my-input"
            placeholder="Nhập vị trí mới"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            sx={{
              width: "100%",
            }}
          />

          <Button onClick={handleCreateRole}>Thêm</Button>
        </FlexBox>
      </FormGroup>
    </FormControl>
  );
};

export default CreateNewRoleForm;
