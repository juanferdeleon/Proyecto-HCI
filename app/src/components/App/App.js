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
import sidebar from "../SideBar/sidebar";
import GuitarLesson from "../Lessons/Guittar/GuitarLesson";
import PianoLesson from "../Lessons/Piano/PianoLesson";
import BateriaLesson from "../Lessons/Bateria/BateriaLesson";
import ViolinLesson from "../Lessons/Violin/ViolinLesson";


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
          <Route path="/GuitarLesson" exact component={GuitarLesson} />
          <Route path="/PianoLesson" exact component={PianoLesson} />
          <Route path="/BateriaLesson" exact component={BateriaLesson} />
          <Route path="/ViolinLesson" exact component={ViolinLesson} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
