import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./containers/app";

const rootElement = document.getElementById("root");

ReactDOM.render(<App store={store}/>, rootElement);