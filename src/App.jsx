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

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="cdr" element={<Cdr />} />
              </Route>
              <Route exact path="/" element={<PublicRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="auth" element={<Auth />} />
              </Route>
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
