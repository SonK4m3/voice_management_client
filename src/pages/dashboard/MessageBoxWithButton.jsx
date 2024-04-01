import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MessageBoxWithButton = ({ message, buttonText, onButtonClick }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box bgcolor="grey.main" color="primary.contrastText" p={2} m={2}>
        {message}
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default MessageBoxWithButton;
