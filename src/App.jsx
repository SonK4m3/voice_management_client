import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import Dashboard from "./pages/dashboard";
import Navbar from "./pages/navbar";
import Auth from "./pages/auth";

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>Predictions page</div>}
              />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
