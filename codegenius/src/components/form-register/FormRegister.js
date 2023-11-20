import React, { useState }from 'react'
import api from "../../Api"
import "./FormRegister.css"

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function FormRegister({ toggleModal, changeForm }) {
 
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    const senha = document.querySelector("#inpSenha")
    const email = document.querySelector("#inpEmail")

    if (username.trim() === "" || password.trim() === "") {
      if(username.trim() === "") email.classList.add("error")
      if(password.trim() === "") senha.classList.add("error")
      toast.error('Preencha os campos corretamente')
      return
    }

    api.post(
        "/login",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem("authToken", response.data.token);
          toast.success("Login realizado com sucesso!")
          navigate("/logout");
          toggleModal();
        } else {
          throw new Error("Ocorreu um erro interno!");
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 403:
            email.classList.add("error")
            senha.classList.add("error")
            senha.value = "";
            toast.error("Credenciais incorretas")
            break;
          case 404:
            email.classList.add("error")
            senha.classList.add("error")
            senha.value = "";
            toast.error("Credenciais incorretas")
            break;
        default:
            break;
        }

      });

  }

  return (
   <>
    <p>Cadastre-se!</p>
            <form className="form-content" onSubmit={handleSubmit}>
              <div className="form-content name">
              <div className='vertical-content'>
                <label>Nome:</label>
                <input
                  id="inpNome"
                  placeholder="Digite seu nome"
                  onChange={(e) => {
                    setUserName(e.target.value)
                    e.target.classList.remove("error")
                  }}
                />
                </div>
                <div className='vertical-content'>
                <label>Sobrenome:</label>
                <input
                  id="inpSobrenome"
                  placeholder="Digite seu sobrenome"
                  onChange={(e) => {
                    setUserName(e.target.value)
                    e.target.classList.remove("error")
                  }}
                />
                </div>
              </div>
              <label>E-mail:</label>
              <input
                id="inpEmail"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => {
                  setUserName(e.target.value)
                  e.target.classList.remove("error")
                }}
              />
              <label>Senha:</label>
              <input
                id="inpSenha"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => {
                  setPassword(e.target.value)
                  e.target.classList.remove("error")
                }}
              />
              <label>Confirmação de Senha:</label>
              <input
                id="inpConfirmacaoSenha"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => {
                  setPassword(e.target.value)
                  e.target.classList.remove("error")
                }}
              />
              <button type="submit" className="button-form">
                ENTRAR
              </button>
              <p onClick={() => changeForm()} className="link-right-button">
                Já tem um cadastro? Entre aqui!
              </p>
            </form>
   </>
  )
}

export default FormRegister