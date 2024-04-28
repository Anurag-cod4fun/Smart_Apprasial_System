import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ClassificationProvider } from "./components/Employeedashboard/Sidebar/ClassificationContext";

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your App component with the ClassificationProvider */}
    <BrowserRouter>
      <ClassificationProvider>
        <App />
      </ClassificationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
