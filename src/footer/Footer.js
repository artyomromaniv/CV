import React from "react";
import s from './Footer.module.scss';
import sContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import facebookImg from "../common/assets/image/facebook.svg";
import linkedInImg from "../common/assets/image/linkedin.svg";
import telegramImg from "../common/assets/image/telegram.svg";
import instagramImg from "../common/assets/image/instagram.svg";


export const Footer = () => {
    const instagram = {
        color:'blue',
        backgroundImage: `url(${instagramImg})`
    }
    const telegram = {
        color:'blue',
        backgroundImage: `url(${telegramImg})`
    }
    const linkedIn = {
        color:'blue',
        backgroundImage: `url(${linkedInImg})`
    }
    const facebook = {
        color:'blue',
        backgroundImage: `url(${facebookImg})`
    }


    return (
        <div className={s.footerContainer}>
            <div className={`${sContainer.container} ${s.footerBlock}`}>
                <Title text={"Artyom Romaniv"}/>
                <div className={s.socialIcons}>
                    <div style={instagram} className={s.socialIcon}></div>
                    <div style={telegram} className={s.socialIcon}></div>
                    <div style={linkedIn} className={s.socialIcon}></div>
                    <div style={facebook} className={s.socialIcon}></div>
                </div>
                <span className={s.rights}>® all rights reserved</span>
            </div>
        </div>

    );
}