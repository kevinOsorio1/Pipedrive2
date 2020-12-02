import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import ItemReducer from "./reducers/ItemReducers/ItemReducer";
import { Provider } from "react-redux";

const store = createStore(ItemReducer);
ReactDOM.render(<App />, document.getElementById("root"));
