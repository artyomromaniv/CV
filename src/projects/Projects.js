import React from "react";
import s from './Projects.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className= {`${sContainer.container} ${s.projectsContainer}`} >
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'Project title'} description={'Project description'}/>
                    <Project title={'Project title'} description={'Project description'}/>
                </div>
            </div>
        </div>
    );
}