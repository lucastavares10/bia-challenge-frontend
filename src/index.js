import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const app = (
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
