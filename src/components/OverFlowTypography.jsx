import { Typography, styled } from "@mui/material";

const OverFlowTypography = styled(Typography)({
  display: "inline-block",
  width: "150px",
  whiteSpace: "nowrap",
  overflow: "clip",
  textOverflow: "ellipsis",
});

export default OverFlowTypography;
