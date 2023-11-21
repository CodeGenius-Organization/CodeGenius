import React from "react";

import './Social.css'
import Filters from '../../components/student-landing-page/Filters'
import FriendCard from "./FriendCard";
import TopBarSocial from "./TopBarSocial";

function Social() {
    return (
        <>
            <div className="main_section">
                <TopBarSocial/>
                <Filters />
                <div className="course_list">
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                </div>
            </div>
        </>
    )
}

export default Social