import { alpha, Paper, styled } from "@mui/material";

const TransparentPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  padding: "1rem",
}));

export default TransparentPaper;
