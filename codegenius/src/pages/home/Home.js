import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FiLogOut } from 'react-icons/fi'
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
import CourseCreation from "../professor/CourseCreation";
import ModuleCreation from "../professor/ModuleCreation"
import LandingPage from "../student/landing-page/LandingPage";


function LogOut() {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false)

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
                <li className="active">
                  <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                </li>
                <li>
                  <MdOutlineHiking className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SEUS CURSOS</p>
                </li>
              </ul>
            </div>

            <div className={`list-menu-container`}>
              <h4>SOBRE VOCÊ</h4>
              <ul>
                <li>
                  <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                </li>
                <li>
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
                <li>
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
            <Course />
            {/* <LandingPage /> */}
          {/* <h2>Bem vindo ao CodeGenius</h2> */}
        </div>
      </div>
    </>
  );
}

export default LogOut;