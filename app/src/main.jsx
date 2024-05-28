import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: "Montserrat" }}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
