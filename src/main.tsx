import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import GlobalStyle from "./globalStyle";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
