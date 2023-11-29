import "./CarouselInstitucional.css";
import codegenius_logo from '../../img/codegenius.svg';
import ModaltoForm from '../modal-to-form/ModalToForm';
import React, { useState, useEffect } from 'react';

const textos = [
    {
        titulo: 'Olá, visitante!',
        subtitulo: 'Seja nosso aluno!',
        texto: `A MindTech sempre prioriza o seu aprendizado, pois
        acreditamos que o conhecimento é a chave para abrir portas
        ilimitadas. Por isso, contamos com uma equipe de
        especialistas dedicados a guiá-lo em cada passo do seu
        percurso de aprendizagem.`         
    },
    {
        titulo: 'Ensino Dinâmico',
        subtitulo: 'Aprenda enquanto se diverte',
        texto: `Oferecemos uma ampla variedade de
        conteúdos práticos e exercícios envolventes, projetados para
        cativar e desafiar nossos alunos de forma única. Além disso, 
        os professores têm a oportunidade de criar seus próprios módulos personalizados.`         
    },
    {
        titulo: 'Dashboards e metas',
        subtitulo: 'Monitore sua evolução',
        texto: `Escolha os dias em que pode mergulhar no aprendizado em seu próprio 
        ritmo e abrace a jornada de evolução ao acompanhar de perto cada curso que 
        você conquista.`         
    },
    {
        titulo: 'Atualizações',
        subtitulo: 'Última versão: 1.0',
        texto: `Nesta útlima atualização, lançamos novas funcionalidades, 
        como ranking global dos alunos da plataforma, novos conteúdos, 
        materiais de consulta e muito mais.`         
    }
]

function CarouselLine({iterador, step, setIterador}){
    return <div onClick={() => setIterador(step)} className={`line-box ${iterador === step && 'line-box-bold'}`}>
                <p className={iterador !== step && 'hide'} >{`0${iterador + 1}`}</p>
                <div className={`line ${iterador === step && 'bold'}`}></div>
            </div>
}

function CarouselSteps({iterador, setIterador}) {
    return  (
    <>
       <CarouselLine step={0} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={1} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={2} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={3} iterador={iterador} setIterador={setIterador}/>
    </>
    )
}

function Carousel() {
    const [iterador, setIterador] = useState(0);

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

    function atualizarIterador() {
        let valorNovo = iterador + 1
        if (valorNovo === 4)
            valorNovo = 0;
        setIterador(valorNovo)
    }

    useEffect(() => {
        const interval = setInterval(atualizarIterador, 5000)
        return () => clearInterval(interval)
    })

    return (
        <>
            <div className='right-side'>
                <div className='carroussel'>
                    <CarouselSteps iterador={iterador} setIterador={setIterador}/>
                </div>
                <div className='logomarca-codegenius'>
                    <img src={codegenius_logo} />
                    <p>CodeGenius</p>
                </div>
                <div className='text'>
                    <h1>{textos[iterador].titulo}</h1>
                    <h2>{textos[iterador].subtitulo}</h2>
                    <p>{textos[iterador].texto}</p>
                </div>
                <button className='cadastre-se' onClick={handleVisibleCad}>Cadastre-se</button>
            </div>
            <div className="reset-modal-pos">
            <ModaltoForm
                toggleModal={handleVisible}
                visible={modalVisible}
            />    
            </div>
            
        </>
    );
}


export default Carousel;

