import React from "react";
import s from './RemoteWorkBlock.module.scss';
import sContainer from './../common/styles/Container.module.css'


export const RemoteWorkBlock = () => {
    return (
        <div className={s.remoteWorkBlockContainer}>
            <div className={`${sContainer.container} ${s.mainRemoteWorkBlock}`}>
                <div className={s.remoteBlockZone}>
                    <h3 className={s.title}>Considering options for remote work</h3>
                    <button className={s.recruitButton}>Recruit me</button>
                </div>
            </div>
        </div>
    );
}