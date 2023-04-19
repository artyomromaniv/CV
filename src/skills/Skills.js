import React from "react";
import s from './Skills.module.scss'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import jsImg from "../common/assets/image/jsImg.svg"
import reactImg from "../common/assets/image/reactImg.svg"
import reduxImg from "../common/assets/image/reduxImg.svg"


export const Skills = () => {
    const js = {
        color:'blue',
        backgroundImage: `url(${jsImg})`
    }
    const react = {
        color:'blue',
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        color:'blue',
        backgroundImage: `url(${reduxImg})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Skill  style={js}
                            title={'JS'}
                           description={'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'}/>
                    <Skill style={react}
                           title={'React'}
                           description={'Build encapsulated components that manage their own state, then compose them to make complex UIs.'}/>
                    <Skill style={redux}
                           title={'Redux'}
                           description={'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'}/>

                </div>
            </div>
        </div>
    );
}


