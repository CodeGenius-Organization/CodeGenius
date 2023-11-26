import React, { useEffect, useState } from "react";
import './ModalToForm.css'
import codegenius from "../../img/codegenius.png";
import FormLogin from "../form-login/FormLogin";
import { AiOutlineClose } from "react-icons/ai";
import FormRegister from "../form-register/FormRegister";


function LoginModal({ toggleModal, visible }) {

  const [changeForm, setChangeForm] = useState(true)

  function changeVisibleForm() {
    setChangeForm(!changeForm)
  }

  useEffect(() => {
    const modal = document.getElementById("content-modal");
    modal.classList.toggle("block");
    const modalContainer = document.getElementById("modal-close");
    modalContainer.classList.toggle("off");
  }, [visible]);

  // function isValid(input) {
  //   if (input.value.trim() === "" || input.value == null) {
  //     input.classList.add("error")
  //     return false
  //   }
  //   return true
  // }

  // function isValidAll(senha, email) {
  //   if(isValid(email) && isValid(senha)){
  //     return true
  //   } 
  //   return false
  // }

  return (
    <>
      <div
        id="modal-close"
        className="modal-container"
        onClick={(e) => {
          if (e.target.id === "modal-close") {
            toggleModal();
            setTimeout(() => {
              if (changeForm === false) changeVisibleForm()
            }, 500)
          }
        }
        }
      >
        <div id="content-modal" className="modal-content">
          <div className="login-form">
            <div className="login-content">
              <div className="logo-container">
                <img src={codegenius} alt="logo-codegenius" />
                <p>CodeGenius</p>
              </div>
              {changeForm ? <FormLogin
                changeForm={changeVisibleForm}
                toggleModal={toggleModal} 
                modalVisible={visible}
                /> :
                <FormRegister
                  changeForm={changeVisibleForm}
                  toggleModal={toggleModal}
                  modalVisible={visible}
                  />}
            </div>
          </div>

          <div className={`img-container ${changeForm ? '' : 'teste'}`}>
            <div className="linear-gradient">
              <AiOutlineClose
                id="buttonCloseModal"
                className="close-icon"
                onClick={() => {
                  toggleModal()
                  setTimeout(() => {
                    if (changeForm === false) changeVisibleForm()
                  }, 500)
                }
                }
              />
              <p>MindTech</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;