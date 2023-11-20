import React from "react";
import "./NavBar.css";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function NavBar({ onLoginModal }) {
  
  function handleMenuMobile() {
    const menu = document.getElementById("navbar-mobile");
    menu.classList.toggle("active");
    const menuClose = document.getElementById("navbar-closeOut");
    menuClose.classList.toggle("activeClose");
  }

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <h3>MindTech</h3>
        <FiMenu className="menu-mobile" onClick={() => handleMenuMobile()} />
        {/* Div ao lado do menu mobile para fechar ao clicar */}
        <div id="navbar-closeOut" className="navbar-handle-closeOut" onClick={() => handleMenuMobile()}></div>
        <ul id="navbar-mobile" className="navbar-menu">
          <AiOutlineClose
            className="menuButtonClose"
            onClick={() => handleMenuMobile()}
          />
          <li className="nav_button">HOME</li>
          <li className="nav_button">SOBRE NÓS</li>
          <li className="nav_button">CODEGENIUS</li>
          <li className="nav_button">EQUIPE</li>
          <li onClick={() => onLoginModal()}>
            <FiLogIn />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;