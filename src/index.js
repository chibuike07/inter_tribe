import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import PersistGate from "./Config/persistor";

const ROOT = document.getElementById("root");
render(
  <PersistGate>
    <App />
  </PersistGate>,
  ROOT
);
