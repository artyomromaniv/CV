import React from "react";
import s from './Nav.module.scss';

export function Nav() {

    return (
        <div className={s.nav} >
            <a className={s.navBtn} href="">Main</a>
            <a className={s.navBtn} href="">Skills</a>
            <a className={s.navBtn} href="">Projects</a>
            <a className={s.navBtn} href="">Contacts</a>
        </div>
    );
}


