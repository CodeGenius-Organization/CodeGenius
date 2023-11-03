import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ModaltoForm from '../components/ModalToForm';
import './Home.css';
import home_img from '../img/Computer1.png';


function Home() {

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        modalVisible ? body.style.overflow = "hidden" : body.style.overflow = "auto";
    }, [modalVisible]);

    function handleVisible() {
        setModalVisible(!modalVisible)
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
                                    <img className='home-img' src={home_img}/>
                                </div>
                            </div>
                            <div className='sobre-nos'></div>
                            <div className='codegenius'></div>
                            <div className='equipe'></div>
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