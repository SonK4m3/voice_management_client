import React from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Box } from "@mui/material";
import FlexCenter from "../../components/FlexCenter";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const CallDirection = ({ value }) => {
  return (
    <Box>
      {value === "local_internal" ? (
        <FlexCenter gap={1}>
          Nội bộ
          <PeopleOutlineIcon
            sx={{
              color: "#ff7961",
            }}
          />
        </FlexCenter>
      ) : value === "inbound" ? (
        <FlexCenter gap={1}>
          Gọi đến
          <PhoneCallbackIcon
            sx={{
              color: "#2196f3",
            }}
          />
        </FlexCenter>
      ) : value === "outbound" ? (
        <FlexCenter gap={1}>
          Gọi đi
          <PhoneForwardedIcon
            sx={{
              color: "#4caf50",
            }}
          />
        </FlexCenter>
      ) : (
        "Không biết"
      )}
    </Box>
  );
};

export default CallDirection;
