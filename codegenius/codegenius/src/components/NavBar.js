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
          <li>HOME</li>
          <li>SOBRE NÓS</li>
          <li>CODEGENIUS</li>
          <li>EQUIPE</li>
          <li onClick={() => onLoginModal()}>
            <FiLogIn />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;