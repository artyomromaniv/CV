import React from "react";
import s from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <div className={s.iconClick}>
                    <a href="#">Look</a>
                </div>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}