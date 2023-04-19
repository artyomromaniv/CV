import React from "react";
import s from './Main.module.scss';
import sContainer from './../common/styles/Container.module.css'
import me from "../common/assets/image/me.jpg";


export const Main = () => {

    const myPhoto = {
        color:'blue',
        backgroundImage: `url(${me})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Artyom Romaniv</h1>
                    <p>Front-end developer</p>
                </div>
                <div style={myPhoto} className={s.photo}>

                </div>
            </div>
        </div>
    );
}