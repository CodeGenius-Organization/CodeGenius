import React, { useState, useEffect } from 'react'
import api from "../../Api"
import "./FormRegister.css"

import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

function FormRegister({ toggleModal, changeForm, modalVisible }) {

  useEffect(() => {

    if(modalVisible === false){
    document.querySelector("#inpName").value = ''
    document.querySelector("#inpSurname").value = ''
    document.querySelector("#inpEmail").value = ''
    document.querySelector("#inpPassword").value = ''
    document.querySelector("#inpConfirmPass").value = ''

    document.querySelector("#inpName").classList.remove("error")
    document.querySelector("#inpSurname").classList.remove("error")
    document.querySelector("#inpEmail").classList.remove("error")
    document.querySelector("#inpPassword").classList.remove("error")
    document.querySelector("#inpConfirmPass").classList.remove("error")
    }
  }, [modalVisible])

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setPasswordConfirm] = useState("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  function handleSubmit(e) {
    e.preventDefault();

    const firstNameElement = document.querySelector("#inpName")
    const surnameElement = document.querySelector("#inpSurname")
    const emailElement = document.querySelector("#inpEmail")
    const passwordElement = document.querySelector("#inpPassword")
    const confirmPassElement = document.querySelector("#inpConfirmPass")

    if (firstName.trim() === "" || surname.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPass.trim() === "") {
      if (firstName.trim() === "") firstNameElement.classList.add("error")
      if (surname.trim() === "") surnameElement.classList.add("error")
      if (email.trim() === "") emailElement.classList.add("error")
      if (password.trim() === "") passwordElement.classList.add("error")
      if (confirmPass.trim() === "") confirmPassElement.classList.add("error")
      toast.error('Preencha os campos corretamente')
      return
    }

    if(!validateEmail(emailElement.value)){
      emailElement.classList.add("error")
      toast.error('Email inválido')
      return
    }

    const fullName = `${firstNameElement.value} ${surnameElement.value}`

    if (password !== confirmPass) {
      confirmPassElement.classList.add("error")
      passwordElement.classList.add("error")
      confirmPassElement.value = ""
      passwordElement.value = ""
      toast.error('Senhas não coincidem!')
      return
    }

    api.post(
      "user/users/",
      {
        nome: fullName,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          toast.success("Cadastro realizado com sucesso!")
          firstNameElement.value = "";
          surnameElement.value = "";
          emailElement.value = "";
          passwordElement.value = "";
          confirmPassElement.value = "";
          changeForm()
        } else {
          throw new Error("Ocorreu um erro interno!");
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 409:
            emailElement.classList.add("error")
            passwordElement.value = "";
            confirmPassElement.value = "";
            toast.error("Esse e-mail já está sendo usado!")
            break;
          case 400:
            console.log(error)
            if (error.response.data === "User with this email already exists.") {
              emailElement.classList.add("error")
              passwordElement.value = "";
              confirmPassElement.value = "";
              toast.error("Esse e-mail já está sendo usado!")
              return
            }

            const erro = error.response.data.errors
            console.log(erro)

            for (let i = 0; i < erro.length; i++) {
              if (erro[i].field === "password") {
                passwordElement.classList.add("error")
                confirmPassElement.classList.add("error")
                confirmPassElement.value = "";
                passwordElement.value = "";
                toast.error("Senha deve ter números, letras maiúsculas e caracteres especiais!")
              }

              if (erro[i].field === "email") {
                emailElement.classList.add("error")
                passwordElement.value = "";
                confirmPassElement.value = "";
                toast.error("Precisa ser um e-mail bem formatado!")
                return
              }

              if (erro[i].field === "name") {
                firstNameElement.classList.add("error")
                surnameElement.classList.add("error")
                firstNameElement.value = "";
                surnameElement.value = "";
                toast.error("Nome inválido, Digite apenas o primeiro nome e um sobrenome!")
              }
            }
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
              id="inpName"
              maxLength={30}
              placeholder="Digite seu nome"
              onChange={(e) => {
                setFirstName(e.target.value)
                e.target.classList.remove("error")
              }}
            />
          </div>
          <div className='vertical-content'>
            <label>Sobrenome:</label>
            <input
              maxLength={30}
              id="inpSurname"
              placeholder="Digite seu sobrenome"
              onChange={(e) => {
                setSurname(e.target.value)
                e.target.classList.remove("error")
              }}
            />
          </div>
        </div>
        <label>E-mail:</label>
        <input
          id="inpEmail"
          maxLength={80}
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => {
            setEmail(e.target.value)
            e.target.classList.remove("error")
          }}
        />
        <label>Senha:</label>
        <input
          id="inpPassword"
          maxLength={80}
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => {
            setPassword(e.target.value)
            e.target.classList.remove("error")
          }}
        />
        <label>Confirmação de Senha:</label>
        <input
          id="inpConfirmPass"
          maxLength={80}
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => {
            setPasswordConfirm(e.target.value)
            e.target.classList.remove("error")
          }}
        />
        <button type="submit" className="button-form">
          CADASTRAR
        </button>
        <p onClick={() => changeForm()} className="link-right-button toggle-cad-reg">
          Já tem um cadastro? Entre aqui!
        </p>
      </form>
    </>
  )
}

export default FormRegister