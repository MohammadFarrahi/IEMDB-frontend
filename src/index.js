import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
