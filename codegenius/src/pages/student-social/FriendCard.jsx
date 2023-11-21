import React from "react";
import style from './FriendCard.module.css'

function FriendCard() {
    return (
        <>
            <div className={style.card}>
                <div className={style.profile_picture}>
                    <img src="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw" alt="" />
                </div>
                <div className={style.name}>
                    <p>Paula Maria</p>
                </div>
                <div className={style.unfollow_btn}>
                    <button className={style.unfollow}>Deixar de seguir</button>
                </div>
            </div>
        </>
    )
}

export default FriendCard