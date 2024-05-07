import { Box, Button, Modal, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ButtonModal = ({ renderButton, renderModal }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
  };
  return (
    <div>
      <Button onClick={handleOpen}>{renderButton}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "darkPallete.dark",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <IconButton aria-label="close modal" onClick={handleClose}>
              <CloseIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
          <Box>{renderModal}</Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonModal;
