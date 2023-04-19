import React from "react";
import s from './Contacts.module.scss';
import sContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";


export const Contacts = (props) => {
    return (
        <div className={s.contactsContainer}>
            <div className={`${sContainer.container} ${s.contactsBlock}`}>
                <Title text={"Contacts"}/>
                <div className={s.contactFormBlock}>
                    <form className={s.contactForm}>
                        <input className={s.input}/>
                        <input className={s.input}/>
                        <textarea className={s.textArea}/>
                    </form>
                </div>
                <button type={'submit'} className={s.sendButton}>Send</button>
            </div>
        </div>

    );
}