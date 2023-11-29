import React, {useContext, useEffect, useState} from 'react'
import './Achievements.css'
import AchievementCard from '../../../../components/card-achievement/Achievement'
import { ContextTeste } from "../../../../context/context";
import AchievementsJson from './AchievementsJson';
import api from  '../../../../Api'

function Achievements() {

  const [contextState] = useContext(ContextTeste); 
  const [dataObj, setDataObj] = useState()

  // console.log(contextState.favorites)
  // obj recebendo array de conquistas de AchievementsJson
  const obj = AchievementsJson();

  // Teste de obj por db.json, obs: url de img não funciona por JSON 

  //  useEffect(() =>{
  //   api.get("http://localhost:30041/conquistas", {
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(resp => {
  //     console.log(resp.data)
  //     setDataObj(resp.data)
     
  //   }).catch(error => {
  //     // console.log(error)
  //   })
  //  }, [])

  return (
    <div className='achivements-container'>
        <h3>Consuistas</h3>
            <div className='achievements-scroll'>
                {obj?.map((item => <AchievementCard key={item.id} buttonVisible={true} data={item}/>))}
            </div>
            {/* Map das conquistas adicionadas as favoritas */}
            {/* <div className='achievements-scroll'>
                {contextState.favorites?.map((item => <AchievementCard buttonVisible={false} data={item}/>))}
            </div> */}
    </div>
  )
}

export default Achievements