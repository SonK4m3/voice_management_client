import { alpha, Box, styled } from "@mui/material";

const BorderRoundedBox = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: "5px",
  borderColor: theme.palette.darkPallete.light,
  background: alpha(theme.palette.darkPallete.dark, 0.5),
}));
export default BorderRoundedBox;
