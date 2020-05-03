import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { configureStore } from "../../store";
import MainScreen from "../HomePage/home_page";
import Login from "../Login/login";
import Register from "../Register/register";
import Test from "../Test/test";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={MainScreen} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route Psth="/test" component={Test} />
      </Router>
    </Provider>
  );
};

export default App;
