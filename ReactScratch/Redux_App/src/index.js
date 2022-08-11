import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import NewApp from "./component/NewApp";
import Form from "./Components/Form";
import { store } from "./component/store";

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
    {/* <Form /> */}
  </Provider>,
  document.getElementById("root")
);
