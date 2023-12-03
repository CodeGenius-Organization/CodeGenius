import React from 'react'
import pfp from "../../../../components/student-profile/imgs/imgtest.png"
import { MdOutlineModeEditOutline } from "react-icons/md";
import "./Avatar.css"

function Avatar() {
  return (
    <>
      <div className='avatar-container'>

        <h3>Avatar</h3>
        <div className='avatar-privaty'>
          <div className='avatar-img-container'>
            <img className="avatar-profile-img" src={pfp} alt="" />
            <div className='avatar-edit'>
              <MdOutlineModeEditOutline className='avatar-icon-edit' />
            </div>
          </div>
        </div>

        <h3>Privacidade</h3>
        <div className='term-container'>
          <button className='mg-bt'>TERMOS DE USO</button>
          <button>AGRADECIMENTOS</button>
        </div>
      </div>


    </>
  )
}

export default Avatar