import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <GlobalProvider>
          <App />
      </GlobalProvider>
    </Router>
);
