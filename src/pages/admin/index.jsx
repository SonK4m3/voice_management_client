import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AdminDrawer from "./AdminDrawer";

const AdminLayout = () => {
  return (
    <Box width="100%" height="100%">
      <AdminDrawer />
      <Box component="main" p={3}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
