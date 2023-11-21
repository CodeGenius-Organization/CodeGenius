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

import Course from "../student/course/Course";
import LandingPage from "../student/landing-page/LandingPage";
import Profile from "../../components/student-profile/Profile";
import Contact from "../form-contact/Contact";
import Social from "../student-social/Social";
import Courses from "../student/courses/Courses";
// import CourseCreation from "../professor/CourseCreation";
// import ModuleCreation from "../professor/ModuleCreation"
// import LandingPage from "../student/landing-page/LandingPage";


function LogOut() {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false)
  const [navigateMenu, setNavigateMenu] = useState('cursos')
  const [contentHome, setContentHome] = useState(<Course/>);

  useEffect(()=>{
    switch (navigateMenu){
      case 'seus-cursos':
        setContentHome(<Courses/>)
        break;
      case 'profile':
        setContentHome(<Profile/>)
        break;
      case 'social':
        setContentHome(<Social/>)
        break;
      case 'contact':
        setContentHome(<Contact/>)
        break;
      default:
        setContentHome(<LandingPage/>)
    }
  }, [navigateMenu])

  function handleLogout() {
    sessionStorage.removeItem("authToken");
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
                <li className={`${navigateMenu === 'cursos' ? 'active' : ''}`} onClick={() => setNavigateMenu('cursos')}>
                  <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                </li>
                <li className={`${navigateMenu === 'seus-cursos' ? 'active' : ''}`} onClick={() => setNavigateMenu('seus-cursos')}>
                  <MdOutlineHiking className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SEUS CURSOS</p>
                </li>
              </ul>
            </div>

            <div className={`list-menu-container`}>
              <h4>SOBRE VOCÊ</h4>
              <ul>
                <li className={`${navigateMenu === 'profile' ? 'active' : ''}`} onClick={() => setNavigateMenu('profile')}>
                  <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                </li>
                <li className={`${navigateMenu === 'social' ? 'active' : ''}`} onClick={() => setNavigateMenu('social')}>
                  <MdOutlineDiversity3 className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SOCIAL</p>
                </li>
                <li>
                  <MdOutlineSettings className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CONFIGURAÇÃO</p>
                </li>
                <li className={`${menuToggle ? 'center-items' : ''}`}>
                <input id="toggle" className={`toggle `} type="checkbox"></input>
                <label for="toggle"></label>
                </li>
              </ul>
            </div>

            <div className={`list-menu-container flex-end-style`}>
              <ul>
                <li className={`${navigateMenu === 'contact' ? 'active' : ''}`} onClick={() => setNavigateMenu('contact')}>
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