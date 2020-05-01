import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { configureStore } from "../../store";
import MainScreen from "../HomePage/home_page";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={MainScreen} />
      </Router>
    </Provider>
  );
};

export default App;
