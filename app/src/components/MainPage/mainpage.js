import React from "react";

import SideBar from "../SideBar/sidebar";

import "./styles.css";
import { connect } from "react-redux";
import * as selectors from "../../reducers";
import { Redirect, Link } from "react-router-dom";
import testMusicalImg from "../img/test.jpg";
import recomendationsImg from "../img/recomendations.jpg";

const MainPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="user-main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="lessons-container">
        <div className="upper-container">
          <div className="promo-test">
            <div className="description-test">
              <div>
                <h2>Toma el Test de aptitudes musicales</h2>
                <p>Si no sabes que instrumento tocar, aqui te guiaremos.</p>
              </div>
              <div>
                <Link to="/quiz">
                  <button className="btn">Iniciar</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={testMusicalImg} alt="" />
            </div>
          </div>
          <div className="promo-test">
            <div className="description-test">
              <div>
                <h2>Otros Sitios por Ver</h2>
                <p>
                  Si deseas ver mas recursos, te recomendamos algunas opciones.
                </p>
              </div>
              <div>
                <Link to="/recomendations">
                  <button className="btn">Visitar</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={recomendationsImg} alt="" />
            </div>
          </div>
        </div>
        <div className="lower-container">
          <div className="promo-lessons">
            <h1>Por si te interesa.</h1>
            <div className="lessons">
              <div class="lesson">
                <div class="lesson__image_1"></div>
                <div class="lesson__footer">
                  <div class="lesson__meta">
                    <div class="lesson__title">Guittarra</div>
                    <div class="lesson__size">Basics</div>
                  </div>
                </div>
              </div>
              <div class="lesson">
                <div class="lesson__image_2"></div>
                <div class="lesson__footer">
                  <div class="lesson__meta">
                    <div class="lesson__title">Piano</div>
                    <div class="lesson__size">Basics</div>
                  </div>
                </div>
              </div>
              <div class="lesson">
                <div class="lesson__image_3"></div>
                <div class="lesson__footer">
                  <div class="lesson__meta">
                    <div class="lesson__title">Violin</div>
                    <div class="lesson__size">Basics</div>
                  </div>
                </div>
              </div>
              <div class="lesson">
                <div class="lesson__image_4"></div>
                <div class="lesson__footer">
                  <div class="lesson__meta">
                    <div class="lesson__title">Bateria</div>
                    <div class="lesson__size">Basics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(MainPage);
