import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// This is the single entry point of the app.
// It mounts the <App /> component into the <div id="root"> from index.html.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
