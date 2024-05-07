import React from "react";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import FlexCenter from "../../components/FlexCenter";
const AnswerState = ({ value }) => {
  return (
    <FlexCenter height="100%">
      {value === "early" ? (
        <CallIcon
          sx={{
            color: "#4caf50",
          }}
        />
      ) : value === "hangup" ? (
        <CallEndIcon
          sx={{
            color: "#ff1744",
          }}
        />
      ) : (
        "Không biết"
      )}
    </FlexCenter>
  );
};

export default AnswerState;
