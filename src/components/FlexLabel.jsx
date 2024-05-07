import { InputLabel, styled } from "@mui/material";

const FlexLabel = styled(InputLabel)(({ theme }) => ({
  width: "100%",
  fontSize: "18px",
  fontStyle: "bold",
  color: theme.palette.grey[100],
}));

export default FlexLabel;
