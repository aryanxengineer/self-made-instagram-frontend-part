import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Provider } from "react-redux";
import { reduxStore } from "./store/reduxStore.ts";

export let isAuthenticated = true;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Provider store={reduxStore}>
          <App />
        </Provider>
        <Toaster position="top-center" richColors />
      </TooltipProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
