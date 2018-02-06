import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
