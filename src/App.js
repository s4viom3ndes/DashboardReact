import { ColorModedeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModedeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <div className="app">
        <main className="content">
          
        </main>
      </div>
      </ThemeProvider>
    </ColorModedeContext.Provider>
  );
}

export default App;
