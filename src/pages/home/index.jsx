import Box from "@mui/material/Box";
import DashboardBox from "../../components/DashboardBox";
import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem">
      <DashboardBox p={3}>
        <Typography variant="h1" color="InfoBackground">Quản lý cuộc gọi</Typography>
      </DashboardBox>
    </Box>
  );
};

export default Index;
