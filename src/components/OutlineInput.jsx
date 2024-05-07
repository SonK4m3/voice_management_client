import { Input, styled } from "@mui/material";

const OutlineInput = styled(Input)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "16px 24px 8px 24px",
  color: theme.palette.grey[900],
  width: "100%",
}));

export default OutlineInput;
