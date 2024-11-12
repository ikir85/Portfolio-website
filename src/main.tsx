import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import { ThemeProvider } from "./components/context/themeContext.tsx";
/*import './index.css'*/
const QueryClientNew = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={QueryClientNew}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
