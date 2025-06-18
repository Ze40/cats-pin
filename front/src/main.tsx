import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/templates.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
