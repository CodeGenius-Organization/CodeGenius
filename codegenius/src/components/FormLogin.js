import React, { useState } from 'react'
import api from '../Api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './FormLogin.css'

function FormLogin({ toggleModal, changeForm }) {

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
        "/user/login",
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
    <p>Olá novamente!</p>
            <form className="form-content" onSubmit={handleSubmit}>
              <label>E-mail:</label>
              <input
                id="inpEmail"
                type="email"
                className="input-margin"
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
              <a href="/">Esqueceu sua senha?</a>
              <button type="submit" className="button-form">
                ENTRAR
              </button>
              <p onClick={() => changeForm()} className="link-right-button">
                Não tem cadastro? Cadastre-se aqui
              </p>
            </form>
   </>
  )
}

export default FormLogin