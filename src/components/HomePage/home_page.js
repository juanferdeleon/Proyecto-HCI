import React from "react";

import logo from "./logo1.png";
import "./style.css";

import Parallax from "react-rellax";

const MainScreen = () => {
  return (
    <div>
      <section className="section-top">
        <Parallax speed={5}>
          <div className="content rellax">
            <h1>Nos preocupamos por tu aprendizaje</h1>
            <button className="btn">Registrate</button>
          </div>
        </Parallax>
      </section>
      <section className="section section-stream">
        <div className="content-2">
          <Parallax speed={1}>
            <img className="play rellax" src={logo} alt="" />
          </Parallax>
        </div>
        <div className="content rellax">
          <Parallax speed={4}>
            <div>
              <h2 className="secondary-text">Stream Everything</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
              </p>
            </div>
          </Parallax>
          <Parallax speed={4}>
            <div>
              <h2 className="secondary-text">Short is the New Long</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et dicta consectetur incidunt omnis nam quis quidem nisi ipsa
                deserunt.
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
