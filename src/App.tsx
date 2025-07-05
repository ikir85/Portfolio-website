import "./App.css";
import { ThemeProvider } from "./components/context/themeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const QueryClientNew = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={QueryClientNew}>
      <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
