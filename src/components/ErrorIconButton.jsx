import { IconButton, styled } from "@mui/material";

const ErrorIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.darkPallete.light,
  borderColor: theme.palette.darkPallete.grey,
  border: "1px solid",
  borderRadius: "5px",
  padding: "1px",
  "&:hover": {
    backgroundColor: theme.palette.error.main,

    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}));

export default ErrorIconButton;
