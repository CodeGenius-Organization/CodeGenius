import React from 'react'
import './Settings.css'
import Privaty from './privaty/Privaty'
import UserData from './user-data/UserData'
import Achievements from './achievements/Achievements'

function Settings() {

  const dataUser = JSON.parse(window.atob(sessionStorage.getItem('dataUser')))
  const token = sessionStorage.getItem('authToken')
  // console.log(dataUser)
 

  return (
    <div className='container-settings'>
        <Privaty />
        <div className='container-column'>
            <UserData data={dataUser} token={token}/>
            <Achievements/>
        </div>
    </div>
  )
}

export default Settings