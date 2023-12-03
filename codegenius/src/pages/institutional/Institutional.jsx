import React, { useEffect, useState } from 'react';
import './Institutional.css';
import ModaltoForm from '../../components/modal-to-form/ModalToForm';

import { NavBar, CardOurTeam, Carousel, CardInstitucional } from '../../components'

// imagem
import home_img from '../../img/Computer1.png';
import codegenius_img from '../../img/Computer 2.svg';
import kaue from '../../img/kaue.png';
import lucas from '../../img/lucas.png';
import mariana from '../../img/mariana.png';
import paula from '../../img/paula.png';
import thiago from '../../img/thiago.png';
import victor from '../../img/victor.png';
import face from '../../img/face.svg';
import insta from '../../img/insta.svg';
import whats from '../../img/whats.svg';
import scrollToHelper from '../../helpers/scrollHelper';

function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        modalVisible ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }, [modalVisible]);

    function handleVisible() {
        setModalVisible(!modalVisible);
    }

    function handleVisibleCad() {
        setModalVisible(!modalVisible);
        document.querySelector(".toggle-cad-reg").click()
    }

    return (
        <>
            <NavBar
                onLoginModal={handleVisible}
            />
            <div className='background'>
                <div className='gradient'>
                    <div className="side left">
                        <div className="blur purple"></div>
                        <div className="blur purple"></div>
                        <div className="blur purple"></div>
                    </div>
                    <div className="side right">
                        <div className="blur pink"></div>
                        <div className="blur pink"></div>
                    </div>
                </div>
                <div className='container'>
                    <div className='content'>
                        <div className='home' id='home'>
                            <div className='left-side'>
                                <h1>Explore as tendências tecnológicas atuais!</h1>
                                <p>Expanda seus conhecimentos sobre as tecnologias e ferramentas que estão bombando em TI de maneira simples e prática.</p>
                                <div className='bt-home'>
                                    <button className='cadastre-se' onClick={handleVisibleCad}>Cadastre-se</button>
                                    <button className='saiba-mais' data-scroll="#sobre_nos" onClick={scrollToHelper}>Saiba mais</button>
                                </div>
                            </div>
                            <div className='right-side'>
                                <img className='home-img' src={home_img} />
                            </div>
                        </div>
                        <div className='sobre-nos' id='sobre_nos'>
                            <div className='text'>
                                <h1>sobre nós</h1>
                                <p>A MindTech vem se destacando na indústria tecnológica, buscando tornrar-se referência em ensino e tecnologia. Nossa missão é proporcionar um aprendizado dinâmico e didático, abrangendo uma ampla gama de conceitos na área de Tecnologia da Informação (TI). Contamos com uma equipe de profissionais excepcionalmente qualificados, que acumulam anos de experiência no mercado, prontos para orientar tanto aqueles que desejam adentrar o campo quanto aqueles que já possuem um conhecimento prévio.</p>
                            </div>
                            <div className='cards'>
                                <CardInstitucional />
                            </div>
                        </div>
                        <div className='codegenius' id='codegenius'>
                            <div className='left-side'>
                                <img className='codegenius-img' src={codegenius_img} />
                            </div>
                            <Carousel />
                        </div>
                        <div className='equipe' id='equipe'>
                            <h1 className='title-equipe'>Nossa Equipe</h1>
                            <div className='cards-equipe'>
                                <CardOurTeam
                                    person={kaue}
                                    name={"Kaue Victor"}
                                    funcao={"Negócios"}
                                />
                                <CardOurTeam
                                    person={lucas}
                                    name={"Lucas Jorge"}
                                    funcao={"Quality Assurance"}

                                />
                                <CardOurTeam
                                    person={mariana}
                                    name={"Mariana Namie"}
                                    funcao={"Front-end"}
                                />
                            </div>
                            <div className='cards-equipe'>
                                <CardOurTeam
                                    person={paula}
                                    name={"Paula Maria"}
                                    funcao={"DevOps"}
                                />
                                <CardOurTeam
                                    person={thiago}
                                    name={"Thiago Hideki"}
                                    funcao={"Back-end"}
                                />
                                <CardOurTeam
                                    person={victor}
                                    name={"Victor Daniel"}
                                    funcao={"Back-end"}
                                />
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="footer">
                        <div className="container">
                            <div className="logo-mindtech">
                                <h1>MindTech</h1>
                            </div>
                            <div className="menu">
                                <li>HOME</li>
                                <li>SOBRE NÓS</li>
                                <li>CODEGENIUS</li>
                                <li>EQUIPE</li>
                            </div>
                            <div className="redes-sociais">
                                <div className="facebook">
                                    <img src={face} />
                                </div>
                                <div className="instagram">
                                    <img src={insta} />
                                </div>
                                <div className="whatsapp">
                                    <img src={whats} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            <ModaltoForm
                toggleModal={handleVisible}
                visible={modalVisible}
            />
        </>
    )
}

export default Home