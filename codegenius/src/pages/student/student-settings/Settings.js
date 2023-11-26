import React from 'react'
import './Settings.css'
import Privaty from './privaty/Privaty'
import UserData from './user-data/UserData'
import Achievements from './achievements/Achievements'

function Settings() {

  return (
    <div className='container-settings'>
        <Privaty />
        <div className='container-column'>
            <UserData/>
            <Achievements/>
        </div>
    </div>
  )
}

export default Settings