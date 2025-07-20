import './App.css'
import GoogleFlights from "./pages/GoogleFlights.tsx";
import {useState} from "react";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {LocalThemeContext} from "./context/themeContext.ts";
import Navbar from "./components/Navbar.tsx";
import {createTheme, ThemeProvider, useColorScheme} from "@mui/material";

function App() {
  const localTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(localTheme ?? 'light');
  const { setMode } = useColorScheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setMode(newTheme)
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

    const muiTheme = createTheme({
        colorSchemes: {
            dark: theme === 'dark',
            light: theme === 'light',
        },
    });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });


  return (
    <QueryClientProvider client={queryClient}>
      <LocalThemeContext value={theme}>
          <ThemeProvider theme={muiTheme}>
            <div className={theme}>
              <Navbar toggleTheme={toggleTheme} />
              <GoogleFlights />
            </div>
          </ThemeProvider>
      </LocalThemeContext>
    </QueryClientProvider>
  )
}

export default App