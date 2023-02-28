import React from "react";
import s from './Footer.module.css';
import sContainer from './../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={`${sContainer.container} ${s.footerBlock}`}>
                <h3 className={s.title}>Artyom Romaniv</h3>
                <div className={s.socialNetworkIcons}>
                    wcdddddd
                </div>
                <h4 className={s.rights}>® all rights reserved</h4>
            </div>
        </div>

    );
}