import React from "react";
import s from './Contacts.module.css';
import sContainer from './../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={s.contactsContainer}>
            <div className={`${sContainer.container} ${s.contactsBlock}`}>
                <h3 className={s.title}>Contacts</h3>
                <div className={s.contactFormBlock}>
                    <form className={s.contactForm}>
                        <input className={s.input}/>
                        <input className={s.input}/>
                        <textarea className={s.textArea}/>
                    </form>
                </div>
                <button className={s.sendButton}>Send</button>
            </div>
        </div>

    );
}