import React from 'react'
import './Achievements.css'
import AchievementCard from '../../../../components/card-achievement/Achievement'
import trophy from "../../../../img/trophy.svg"

function Achievements() {

   const obj={
    title: 'Nome',
    description: 'Complete em 7 dias',
    img: trophy,
  }

  return (
    <div className='achivements-container'>
        <h3>Consuistas</h3>
            <div className='achievements-scroll'>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
                <AchievementCard buttonVisible={true} data={obj}/>
            </div>
    </div>
  )
}

export default Achievements