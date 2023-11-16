import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ModaltoForm from "../components/ModalToForm";
import "./Home.css";
import home_img from "../img/Computer1.png";
import mission from "../img/Icon_Mission_white.svg";
import mission_colorful from "../img/Icon_Mission_(hover).svg";

function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    modalVisible
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [modalVisible]);

  function handleVisible() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <NavBar onLoginModal={handleVisible} />
      <div className="background">
        <div className="gradient">
          <div className="container">
            <div className="content">
              <div className="home">
                <div className="left-side">
                  <h1>Explore as tendências tecnológicas atuais!</h1>
                  <p>
                    Expanda seus conhecimentos sobre as tecnologias e
                    ferramentas que estão bombando em TI de maneira simples e
                    prática.
                  </p>
                  <div className="bt-home">
                    <button className="cadastre-se">Cadastre-se</button>
                    <button className="saiba-mais">Saiba mais</button>
                  </div>
                </div>
                <div className="right-side">
                  <img className="home-img" src={home_img} />
                </div>
              </div>
              <div className="sobre-nos">
                <div className="text">
                  <h1>sobre nós</h1>
                  <p>
                    A MindTech vem se destacando na indústria tecnológica,
                    buscando tornrar-se referência em ensino e tecnologia. Nossa
                    missão é proporcionar um aprendizado dinâmico e didático,
                    abrangendo uma ampla gama de conceitos na área de Tecnologia
                    da Informação (TI). Contamos com uma equipe de profissionais
                    excepcionalmente qualificados, que acumulam anos de
                    experiência no mercado, prontos para orientar tanto aqueles
                    que desejam adentrar o campo quanto aqueles que já possuem
                    um conhecimento prévio.
                  </p>
                </div>
                <div className="cards">
                  <div className="card mission">
                    <div className="card-content">
                      <img
                        className="mission-img"
                        src={mission}
                        style={{ display: "block" }}
                      />
                      <img
                        className="mission-img-colorful"
                        src={mission_colorful}
                        style={{ display: "none" }}
                      />
                      <h1>missão</h1>
                      <p>
                        Queremos oferecer educação gratuita e consistente para
                        todas as pessoas.
                      </p>
                    </div>
                  </div>
                  <div className="card vision"></div>
                  <div className="card values"></div>
                </div>
              </div>
              <div className="codegenius"></div>
              <div className="equipe"></div>
              <div className="footer"></div>
            </div>
          </div>
        </div>
      </div>

      <ModaltoForm toggleModal={handleVisible} visible={modalVisible} />
    </>
  );
}

export default Home;
