import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./mui-config/mui-config.js";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./config/client.js";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <ToastContainer />
          <CssBaseline />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
