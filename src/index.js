import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthContext/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
