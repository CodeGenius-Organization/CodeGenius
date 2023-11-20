import React, { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import ModaltoForm from '../../components/modal-to-form/ModalToForm';
import './Institutional.css';
import CardOurTeam from '../../components/card-our-team/CardOurTeam';

// imagem
import home_img from '../../img/Computer1.png';
import mission from '../../img/Icon_Mission_white.svg';
import mission_colorful from '../../img/Icon_Mission_hover.svg';
import vision from '../../img/Icon_Vision_white.svg';
import values from '../../img/Icon_Values_white.svg';
import codegenius_img from '../../img/Computer 2.svg';
import codegenius_logo from '../../img/codegenius.svg';
import kaue from '../../img/kaue.png';
import lucas from '../../img/lucas.png';
import mariana from '../../img/mariana.png';
import paula from '../../img/paula.png';
import thiago from '../../img/thiago.png';
import victor from '../../img/victor.png';
import face from '../../img/face.svg';
import insta from '../../img/insta.svg';
import whats from '../../img/whats.svg';

function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        modalVisible ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }, [modalVisible]);

    function handleVisible() {
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <NavBar
                onLoginModal={handleVisible}
            />
            <div className='background'>
                <div className='gradient'>
                    <div className='container'>
                        <div className='content'>
                            <div className='home'>
                                <div className='left-side'>
                                    <h1>Explore as tendências tecnológicas atuais!</h1>
                                    <p>Expanda seus conhecimentos sobre as tecnologias e ferramentas que estão bombando em TI de maneira simples e prática.</p>
                                    <div className='bt-home'>
                                        <button className='cadastre-se'>Cadastre-se</button>
                                        <button className='saiba-mais'>Saiba mais</button>
                                    </div>
                                </div>
                                <div className='right-side'>
                                    <img className='home-img' src={home_img} />
                                </div>
                            </div>
                            <div className='sobre-nos'>
                                <div className='text'>
                                    <h1>sobre nós</h1>
                                    <p>A MindTech vem se destacando na indústria tecnológica, buscando tornrar-se referência em ensino e tecnologia. Nossa missão é proporcionar um aprendizado dinâmico e didático, abrangendo uma ampla gama de conceitos na área de Tecnologia da Informação (TI). Contamos com uma equipe de profissionais excepcionalmente qualificados, que acumulam anos de experiência no mercado, prontos para orientar tanto aqueles que desejam adentrar o campo quanto aqueles que já possuem um conhecimento prévio.</p>
                                </div>
                                <div className='cards'>
                                    <div className='card mission'>
                                        <div className='card-content'>
                                            <img className="mission-img" src={mission}/>
                                            <h1>missão</h1>
                                            <p>Queremos oferecer educação gratuita e consistente para todas as pessoas.</p>
                                        </div>
                                    </div>
                                    <div className='card vision'>
                                        <div className='card-content'>
                                            <img className='mission-img' src={vision} />
                                            <h1>visão</h1>
                                            <p>Nossa visão é motivar as pessoas a aprender e aprimorar seu conhecimento técnico.</p>
                                        </div>
                                    </div>
                                    <div className='card values'>
                                        <div className='card-content'>
                                            <img className='mission-img' src={values} />
                                            <h1>valores</h1>
                                            <p>Temos como fundamentos confiança mútua e na entrega de um ensino de qualidade.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='codegenius'>
                                <div className='left-side'>
                                    <img className='codegenius-img' src={codegenius_img} />
                                </div>
                                <div className='right-side'>
                                    <div className='carroussel'>
                                        <div className='line-box'>
                                            <p>01</p>
                                            <div className='line'></div>
                                        </div>
                                        <div className='line-box'>
                                            <p>02</p>
                                            <div className='line'></div>
                                        </div>
                                        <div className='line-box'>
                                            <p>03</p>
                                            <div className='line'></div>
                                        </div>
                                        <div className='line-box'>
                                            <p>04</p>
                                            <div className='line'></div>
                                        </div>
                                    </div>
                                    <div className='logomarca-codegenius'>
                                        <img src={codegenius_logo} />
                                        <p>CodeGenius</p>
                                    </div>
                                    <div className='text'>
                                        <h1>Olá, visitante!</h1>
                                        <h2>Seja nosso aluno!</h2>
                                        <p>A MindTech sempre prioriza o seu aprendizado, pois acreditamos que o conhecimento é a chave para abrir portas ilimitadas. Por isso, contamos com uma equipe de especialistas dedicados a guiá-lo em cada passo do seu percurso de aprendizagem.</p>
                                    </div>
                                    <button className='cadastre-se'>Cadastre-se</button>
                                </div>
                            </div>
                            <div className='equipe'>
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
                                        name={"Victor Daniel "}
                                        funcao={"Back-end"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
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
                                    <img src={face}/>
                                </div>
                                <div className="instagram">
                                    <img src={insta}/>
                                </div>
                                <div className="whatsapp">
                                    <img src={whats}/>
                                </div>
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