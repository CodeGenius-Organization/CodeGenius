import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import {
  MdArrowBackIosNew,
  MdOutlineLocalLibrary,
  MdOutlineHiking,
  MdOutlinePerson,
  MdOutlineDiversity3,
  MdOutlineSettings,
  MdHelpOutline,
  MdLogout
} from "react-icons/md";
import codegenius from "../../img/codegenius.svg";
import api from '../../Api'

import Course from "../student/course/Course";
import LandingPage from "../student/landing-page/LandingPage";
import Contact from "../form-contact/Contact";
import Social from "../student-social/Social";
import Courses from "../student/courses/Courses";
import Settings from "../student/student-settings/Settings";
import MainProfile from "../student/profile/MainProfile";
// import CourseCreation from "../professor/CourseCreation";
// import ModuleCreation from "../professor/ModuleCreation"
// import LandingPage from "../student/landing-page/LandingPage";


function LogOut() {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false)
  const [navigateMenu, setNavigateMenu] = useState('cursos')
  const [contentHome, setContentHome] = useState(<LandingPage />);
  const [emailUser, setEmailUser] = useState();
  const [token, setToken] = useState();

  function navigateLeft(teste) {
    switch (teste) {
      case 'seus-cursos':
        setNavigateMenu('seus-cursos')
        setContentHome(<Course />)
        break;
      case 'profile':
        setNavigateMenu('profile')
        setContentHome(<MainProfile />)
        break;
      case 'social':
        setNavigateMenu('social')
        setContentHome(<Social />)
        break;
      case 'contact':
        setNavigateMenu('contact')
        setContentHome(<Contact />)
        break;
      case 'settings':
        setNavigateMenu('settings')
        setContentHome(<Settings />)
        break;
      default:
        setNavigateMenu('cursos')
        setContentHome(<LandingPage />)
    }
  }

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  function getDataHome(email, tokenJWT) {
    api.get(`user/users/info/${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${tokenJWT}`
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("dataUser", window.btoa(JSON.stringify(response.data)));
          // console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
  


  useEffect(() => {

    if(sessionStorage.getItem('authToken') !== null){
      try {
        const tokenT = sessionStorage.getItem('authToken')
        setToken(tokenT)
        const emailToken = parseJwt(tokenT).sub;
        setEmailUser(emailToken)

        getDataHome(emailToken, tokenT)
        
      } catch (error) {
        console.log(error)  
      }
    }  else {
      navigate("/institutional")
      toast.error("Você não está autenticado!")
    }
  
  }, [])

  // console.log(token)
  // console.log(emailUser)

  function handleLogout() {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("dataUser");
    toast.success("Logout realizado com sucesso!")
    navigate("/institutional");
  }

  return (
    <>
      <div className="home-container">
        <div className={`menu-left ${menuToggle ? 'menu-toggle' : ''}`}>
          <div className="logo-container">
            <div className={`logo-content ${menuToggle ? 'center-items' : ''}`}>
              <img src={codegenius} className="logo"></img>
              <div className={`${menuToggle ? 'text-toggle' : ''}`}>
                <h3>CodeGenius</h3>
                <p>version 1.0</p>
              </div>
            </div>
            <div className="arrow-container" onClick={() => {
              setMenuToggle(!menuToggle)
            }}>
              <MdArrowBackIosNew className={`arrow-menu ${menuToggle ? 'arrow-toggle' : ''}`} />
            </div>
          </div>

          <div className="list-menu-group">
            <div className={`list-menu-container`}>
              <h4>APRENDIZADO</h4>
              <ul>
                <li className={`${navigateMenu === 'cursos' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('cursos')
                }}>
                  <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                </li>
                <li className={`${navigateMenu === 'seus-cursos' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('seus-cursos')
                }}>
                  <MdOutlineHiking className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SEUS CURSOS</p>
                </li>
              </ul>
            </div>

            <div className={`list-menu-container`}>
              <h4>SOBRE VOCÊ</h4>
              <ul>
                <li className={`${navigateMenu === 'profile' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('profile')
                }}>
                  <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                </li>
                <li className={`${navigateMenu === 'social' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('social')
                }}>
                  <MdOutlineDiversity3 className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SOCIAL</p>
                </li>
                <li className={`${navigateMenu === 'settings' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('settings')
                }}>
                  <MdOutlineSettings className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CONFIGURAÇÃO</p>
                </li>
                <li className={`${menuToggle ? 'center-items' : ''} cursor-none`}>
                  <input id="toggle" className={`toggle `} type="checkbox"></input>
                  <label htmlFor="toggle"></label>
                </li>
              </ul>
            </div>

            <div className={`list-menu-container flex-end-style`}>
              <ul>
                <li className={`${navigateMenu === 'contact' ? 'active' : ''}`} onClick={() => {

                  navigateLeft('contact')
                }}>
                  <MdHelpOutline className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>FALE CONOSCO</p>
                </li>
                <li onClick={() => handleLogout()}>
                  <MdLogout className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SAIR</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="logout-container">
          {contentHome}
        </div>
      </div>
    </>
  );
}

export default LogOut;