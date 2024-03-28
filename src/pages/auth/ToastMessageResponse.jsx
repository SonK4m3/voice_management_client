import React from "react";
import { Snackbar, Stack, Alert } from "@mui/material";

const TOAST_MESSAGE_RESPONSE = {
  show: false,
  duration: 3000,
  severity: "",
  message: "",
};

const ToastMessageResponse = ({ onClose, toastMessageResponse }) => {
  const { show, duration, severity, message } = toastMessageResponse;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={show || TOAST_MESSAGE_RESPONSE.show}
        autoHideDuration={duration || TOAST_MESSAGE_RESPONSE.duration} // 2 seconds
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity || TOAST_MESSAGE_RESPONSE.severity}
        >
          {message || TOAST_MESSAGE_RESPONSE.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ToastMessageResponse;
