import React from "react";
import s from './Projects.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from "../common/assets/image/todo-list.jpg";
import socialImage from "../common/assets/image/SocialNetwork.jpg";


export const Projects = () => {

    const social = {
        color:'blue',
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        color:'blue',
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className= {`${sContainer.container} ${s.projectsContainer}`} >
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social network'} description={'Reading practice to help you understand simple information, words and sentences about known topics. Texts include posters, messages, forms and timetables.'}/>
                    <Project style={todolist} title={'Todolist'} description={'Reading practice to help you understand simple information, words and sentences about known topics.'}/>
                </div>
            </div>
        </div>
    );
}