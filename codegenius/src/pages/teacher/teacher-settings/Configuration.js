import React from 'react'

import Avatar from "./profile-avatar/Avatar"
import PasswordSettings from './password-settings/PasswordSettings'
import DataTeacher from './data-teacher/DataTeacher'
import EmailSettings from './email-settings/EmailSettings'

import "./Configuration.css"

function Configuration() {
  return (
    <>
      <div className='container-config-teacher'>
            <Avatar />
        <div className='content-settings'>
            <DataTeacher /> 
            <PasswordSettings />
            <EmailSettings />
        </div>
      </div>
    </>
  )
}

export default Configuration