
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <App />
    <Toaster />
  </ThemeProvider>
);
