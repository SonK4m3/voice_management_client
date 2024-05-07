import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import Dashboard from "./pages/dashboard";
import Navbar from "./pages/navbar";
import Auth from "./pages/auth";
import Home from "./pages/home";
import PrivateRoute from "./components/PrivateRoute";
import Cdr from "./pages/cdr";
import PublicRoute from "./components/PublicRoute";
import AdminRoutes from "./components/AdminRoutes";
import AdminLayout from "./pages/admin";
import NotFound from "./pages/404";
import UsersAccount from "./pages/admin/UsersAccount";
import AdminPermission from "./pages/admin/AdminPermission";
import AdminRole from "./pages/admin/role/AdminRole";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 1rem 4rem 1rem">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
              <Route exact path="/" element={<PublicRoute />}>
                <Route path="cdr" element={<Cdr />} />
                <Route path="admin" element={<AdminRoutes />}>
                  <Route path="" element={<AdminLayout />}>
                    <Route path="profile" element={<UsersAccount />} />
                    <Route path="permission" element={<AdminPermission />} />
                    <Route path="role" element={<AdminRole />} />
                  </Route>
                </Route>
                <Route path="home" element={<Home />} />
                <Route path="auth" element={<Auth />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
