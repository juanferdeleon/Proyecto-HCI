import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { configureStore } from "../../store";
import MainScreen from "../HomePage/home_page";
import Login from "../Login/login";
import Register from "../Register/register";
import Quiz from "../Quiz/quiz";
import Recomendations from "../Recomendations/recomendations";
import MainPage from "../MainPage/mainpage";

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/" exact component={MainScreen} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main-page" component={MainPage} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/recomendations" component={Recomendations} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
