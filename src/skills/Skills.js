import React from "react";
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'}/>
                    <Skill title={'React'}
                           description={'Build encapsulated components that manage their own state, then compose them to make complex UIs.'}/>
                    <Skill title={'Redux'}
                           description={'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'}/>

                </div>
            </div>
        </div>
    );
}


