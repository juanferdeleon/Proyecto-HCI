import React from "react";
import Parallax from "react-rellax";
import { Link } from "react-router-dom";

import logo from "../img/logo1.png";
import "./style.css";

const MainScreen = () => {
  return (
    <div>
      <section className="section-top">
        <Parallax speed={5}>
          <div className="content rellax">
            <ul>
              <Link to="recomendations">
                <li>Recomendaciones</li>
              </Link>
              <Link to="/quiz">
                <li>Test</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
            <h1>Nos preocupamos por tu aprendizaje</h1>
            <Link to="/register">
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </Parallax>
      </section>
      <section className="section section-stream">
        <div className="content-2">
          <Parallax speed={1}>
            <div className="img-container">
              <img className="play rellax" src={logo} alt="" />
            </div>
          </Parallax>
        </div>
        <div className="content rellax">
          <Parallax speed={4}>
            <div>
              <h2 className="secondary-text">
                Expertos en guiar tu aprendizaje
              </h2>
              <p>
                Sabemos lo estresante que es tratar de aprender a tocar un
                instrumento y no ver resultados. Somos un equipo de
                profesionales con experiencia en la educacion musical. Confia en
                nosotros para comenzar una nueva aventura musical.
              </p>
            </div>
          </Parallax>
          <Parallax speed={4}>
            <div>
              <h2 className="secondary-text">
                Servicios adaptados a sus necesidades
              </h2>
              <p>
                Puedes programar tus lecciones como tu desees, asi como tambien,
                puedes acceder a tus lecciones anteriores. Todo nuestro equipo
                ha diseñado un curso especial para ti. Explicaremos paso a paso
                lo que necesitas saber para tocar tu instrumento.
              </p>
            </div>
          </Parallax>
        </div>
      </section>
      <section className="section-grid">
        <Parallax speed={1}>
          <div className="rellax">
            <h2 className="tertiary-text">Lindsay M.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vestibulum augue in magna hendrerit, in hendrerit ex laoreet.
              Aliquam eget enim vitae ex efficitur laoreet. Donec vitae velit ut
              mauris fermentum volutpat. Nam porta, sapien in hendrerit
              imperdiet, magna elit efficitur tellus, non mattis sapien nisi
              lobortis ligula.
            </p>
          </div>
        </Parallax>
        <Parallax speed={4}>
          <div className="rellax">
            <h2 className="tertiary-text">Andrew C.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vestibulum augue in magna hendrerit, in hendrerit ex laoreet.
              Aliquam eget enim vitae ex efficitur laoreet. Donec vitae velit ut
              mauris fermentum volutpat. Nam porta, sapien in hendrerit
              imperdiet, magna elit efficitur tellus, non mattis sapien nisi
              lobortis ligula.
            </p>
          </div>
        </Parallax>
        <Parallax speed={7}>
          <div className="rellax">
            <h2 className="tertiary-text">Meg F..</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vestibulum augue in magna hendrerit, in hendrerit ex laoreet.
              Aliquam eget enim vitae ex efficitur laoreet. Donec vitae velit ut
              mauris fermentum volutpat. Nam porta, sapien in hendrerit
              imperdiet, magna elit efficitur tellus, non mattis sapien nisi
              lobortis ligula.
            </p>
          </div>
        </Parallax>
      </section>
      <footer className="footer">
        <ul>
          <li>FAQS</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </footer>
    </div>
  );
};

export default MainScreen;
