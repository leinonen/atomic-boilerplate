import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./App";
import "./index.css";

import { initialState, reducer } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
