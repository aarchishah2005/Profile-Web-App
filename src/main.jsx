import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // ✅ Ensure correct import

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
