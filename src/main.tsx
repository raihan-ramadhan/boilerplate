import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Theme from "./theme.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
