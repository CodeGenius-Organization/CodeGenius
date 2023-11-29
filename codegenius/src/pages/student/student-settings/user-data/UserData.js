import React, { useState } from 'react';
import "./UserData.css";
import { toast } from "react-toastify";
import api from "../../../../Api"

function UserData({ data, token }) {

  const [teste, setTeste] = useState(data)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [surname, setSurname] = useState()
  const [phone, setPhone] = useState()
  const [birthday, setBirthday] = useState()
  const [cep, setCEP] = useState()

  const inputEmail = document.querySelector("#email")
  const inputName = document.querySelector("#name")

  function onPutData(id, token) {

    api.put(
      `user/users/${id}`,
      {
        nome: name,
        email: email,
        password: "Lucc@s155"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
      }
    )
      .then((response) => {

        console.log(response)
        if (response.status === 200) {
          setTeste(response.data)
          sessionStorage.setItem("dataUser", window.btoa(JSON.stringify(response.data)));
          inputEmail.value = ""
          inputName.value = ""
          toast.success("Dados alterados com sucesso!")
        }
      })
      .catch((error) => {
        // switch (error) {
        //   case 409:
        //     toast.error("Esse e-mail já está sendo usado!")
        //     break;
        //   case 400:
        //     console.log(error)
        //     if (error.response.data === "User with this email already exists.") {
        //       toast.error("Esse e-mail já está sendo usado!")
        //       return
        //     }

        //     const erro = error.response.data.errors
        //     console.log(erro)

        //     for (let i = 0; i < erro.length; i++) {
        //       if (erro[i].field === "password") {
        //         toast.error("Senha deve ter números, letras maiúsculas e caracteres especiais!")
        //       }

        //       if (erro[i].field === "email") {
        //         toast.error("Precisa ser um e-mail bem formatado!")
        //         return
        //       }

        //       if (erro[i].field === "name") {
        //         toast.error("Nome inválido, Digite apenas o primeiro nome e um sobrenome!")
        //       }
        //     }
        //     break;

        //   default:
        //     break;
        // }
        console.log(error)
      });

  }

  return (
    <>
      <div className='container-data'>
        <div className='content-data'>
          <span className='title'>Informações Pessoais</span>
          <div className='content-horizontal'>
            <div className='content-txt'>
              <span>E-mail:</span>
              <span>Primeiro Nome:</span>
              <span>Último Nome:</span>
              <span>Telefone:</span>
              <span>Data de Nascimento:</span>
              <span>CEP:</span>
            </div>
            <div className='content-input'>
              <input
              id="email"
              onChange={(e) => {
                setEmail(e.target.value)
                e.target.classList.remove("error")
              }} 
              placeholder={teste.email}></input>
              <input
              id="name"
              onChange={(e) => {
                setName(e.target.value)
                e.target.classList.remove("error")
              }}
              placeholder={teste.nome}></input>
              <input
              onChange={(e) => {
                setSurname(e.target.value)
                e.target.classList.remove("error")
              }}
              placeholder='Sobrenome'></input>
              <input placeholder='(00) 90000-0000'
              onChange={(e) => {
                setPhone(e.target.value)
                e.target.classList.remove("error")
              }}></input>
              <input placeholder='dd/mm/aaaa'
              onChange={(e) => {
                setBirthday(e.target.value)
                e.target.classList.remove("error")
              }}></input>
              <input placeholder='00000-000'
              onChange={(e) => {
                setCEP(e.target.value)
                e.target.classList.remove("error")
              }}></input>
            </div>
          </div>
          <button onClick={() => onPutData(data.id, token)} >Salvar</button>
        </div>
      </div>
    </>
  )
}

export default UserData