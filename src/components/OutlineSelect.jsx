import { Select, styled } from "@mui/material";

const OutlineInput = styled(Select)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "0px 24px 0px 24px",
  color: theme.palette.grey[900],
  width: "100%",
}));

export default OutlineInput;
