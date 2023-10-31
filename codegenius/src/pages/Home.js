import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ModaltoForm from '../components/ModalToForm';
import './Home.css'


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

            <div className='bg1'></div>
            <div className='bg2'></div>
            <div className='bg1'></div>
            <div className='bg2'></div>
        
            <ModaltoForm
                toggleModal={handleVisible}
                visible={modalVisible}
            />
        </>
    )
}

export default Home