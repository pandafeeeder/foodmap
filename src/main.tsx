import { injectGlobal } from "@emotion/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

injectGlobal`
  body {
    background-color: #0e0f17;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: #e9e9eb;
    margin: 0;
    padding: 1rem;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
