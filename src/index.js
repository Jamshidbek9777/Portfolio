import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import Root from "./root/root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Root> */}
      <App />
    {/* </Root> */}
  </React.StrictMode>
);
