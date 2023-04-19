import React from "react";
import s from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.image} style={props.style}>

            </div>
            <div className={s.skillInfo}>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}