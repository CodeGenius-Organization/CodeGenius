import React, {useContext} from 'react'
import './MainProfile.css'
import { ContextTeste } from "../../../context/context";
import Profile from "../../../components/student-profile/Profile";
import AchievementCard from '../../../components/card-achievement/Achievement'

function MainProfile() {
  const [contextState] = useContext(ContextTeste); 
  return (
    <div className='main-profile-container'>
        <Profile/>
        <div className='achivements-container-profile'>
        <h3>Conquistas</h3>
            {/* Map das conquistas adicionadas as favoritas */}
            {contextState.favorites.length > 0 ?  (
                <div className={`achievements-scroll-profile ${contextState.favorites.length >= 6  ? "achivements-scroll-white" : " "}`}>
                {contextState.favorites?.map((item => <AchievementCard buttonVisible={false} data={item}/>))}
            </div>
            ) : (
                <h2>Adicione conquistas ao seu perfil nas configurações!</h2>
            )}
         </div>
        </div>
  )
}

export default MainProfile