import { alpha, styled } from "@mui/material";
import TransparentPaper from "./TransparentPaper";

const GreenGradientPaper = styled(TransparentPaper)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right, ${alpha(
    theme.palette.primary.main,
    0.5
  )}, ${alpha(theme.palette.secondary.main, 0.5)})`,
}));

export default GreenGradientPaper;
