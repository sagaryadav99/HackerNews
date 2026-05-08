import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./context/authProvider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AuthProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </AuthProvider>
  </ThemeProvider>,
);
