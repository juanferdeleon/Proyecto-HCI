import React from "react";

//import RegisterForm from "./RegisterForm/registerform";
import GuitarraViva from "../img/gv.jpg";
import Musecore from "../img/musecore.png";
import SPiano from "../img/simplypiano.png";
import Pianote from "../img/pianote.jpg";
import RealD from "../img/reald.PNG";
import Yousician from "../img/you.png";
import Trala from "../img/trala.png";
import WalkBand from "../img/walk.png";
import MusyCom from "../img/musycom.jpg";
import Logo from "../img/logo1.png";

import "./style.css";
import { Link } from "react-router-dom";

//import Parallax from "react-rellax";

const Recomendations = () => {
  return (
    <section className="recomendations">
      <div className="quiz-title">
        <h1>Descubre otras plataformas</h1>
      </div>
      <div className="quiz-img-container">
        <Link to="/">
          <img src={Logo} className="login-logo" alt="" />
        </Link>
      </div>
      <div className="elementos">
        <div class="grid-container">
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Guitarra Viva</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={GuitarraViva} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Cursos de todos los niveles para que puedas aprender
                      guitarra acústica, eléctrica, española ademas niveles
                      básicos para principiantes gratis. Te recomiendo que
                      empieces por el curso de principiantes, el básico, y
                      avances junto con el de fingerpicking.
                      <div className="button">
                        Visitar
                        <Link to="https://apps.apple.com/ve/app/real-drum-bater%C3%ADa-electr%C3%B3nica/id550920929"></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Musucom</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={MusyCom} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Aprende a tocar guitarra Para aprender a tocar Rock,
                      Blues, Jazz y otros estilos musicales en la Guitarra. Esta
                      curso incluye setenta lecciones en los siguientes estilos:
                      Rock, Blues, Jazz y Funk.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Simply Piano</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={SPiano} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Simply Piano es una forma rápida y divertida de aprender a
                      tocar el piano, de principiante a profesional. Funciona
                      con cualquier piano o teclado. Elegida como una de las
                      mejores aplicaciones para Android de 2017. Un montón de
                      canciones divertidas.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Pianote</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={Pianote} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      PianoLessons.com es un recurso gratuito para ayudar a las
                      personas a aprender a tocar el piano de forma gratuita. Si
                      bien nuestro propósito de presentar a las personas al
                      piano de forma gratuita no ha cambiado, ¡nuestra calidad
                      de captura de video sí! ¡Mira nuestra biblioteca de
                      lecciones!
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Real Drum</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={RealD} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Cursos de todos los niveles para que puedas aprender
                      guitarra acústica, eléctrica, española ademas niveles
                      básicos para principiantes gratis. Te recomiendo que
                      empieces por el curso de principiantes, el básico, y
                      avances junto con el de fingerpicking.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Yousician</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={Yousician} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Cursos de todos los niveles para que puedas aprender
                      guitarra acústica, eléctrica, española ademas niveles
                      básicos para principiantes gratis. Te recomiendo que
                      empieces por el curso de principiantes, el básico, y
                      avances junto con el de fingerpicking.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Trala</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={Trala} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      ¡Aprende a tocar el violín con Trala! Trala lleva tus
                      habilidades de violín desde principiantes hasta tocar con
                      confianza usando comentarios instantáneos y lecciones en
                      video de violinistas profesionales y conocidos. Usa Trala
                      con tu violín real.
                      <div className="button">
                        Visitar
                        <Link to="https://play.google.com/store/apps/details?id=com.trala.learn.violin&hl=en_US"></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Walk band</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={WalkBand} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Cursos de todos los niveles para que puedas aprender
                      guitarra acústica, eléctrica, española ademas niveles
                      básicos para principiantes gratis. Te recomiendo que
                      empieces por el curso de principiantes, el básico, y
                      avances junto con el de fingerpicking.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <div className="title-cont">
                      <div className="title-re">Musecore</div>
                    </div>
                    <div className="contenido">
                      <img className="fotitas" src={Musecore} />
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-back">
                    <div className="contenido">
                      Cursos de todos los niveles para que puedas aprender
                      guitarra acústica, eléctrica, española ademas niveles
                      básicos para principiantes gratis. Te recomiendo que
                      empieces por el curso de principiantes, el básico, y
                      avances junto con el de fingerpicking.
                      <div className="button">Visitar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomendations;
