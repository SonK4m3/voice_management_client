import React from "react";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { IconButton } from "@mui/material";
import { useRecord } from "../../layouts/RecordProvider";
const CallingAction = ({ recordingPath }) => {
  const { setRecord } = useRecord();

  const handlePlayRecord = () => {
    setRecord(recordingPath);
  };

  return (
    <>
      <IconButton onClick={handlePlayRecord}>
        <AudiotrackIcon
          sx={{
            color: "darkPallete.blue",
          }}
        />
      </IconButton>
    </>
  );
};

export default CallingAction;
