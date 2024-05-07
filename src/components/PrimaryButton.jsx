import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.darkPallete.green.default,
  color: theme.palette.darkPallete.dark,
  padding: "8px 16px 8px 16px",
  border: `2px solid ${"theme.palette.darkPalette.green.hover"}`,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.darkPallete.green.hover,
  },
}));

export default PrimaryButton;
