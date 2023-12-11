import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog";
import {Message} from "./Message";
export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
              <div className={s.dialogsItem}>
                  <Dialog name={'Dima'} id={1}/>
                  <Dialog name={'Sveta'} id={2}/>
                  <Dialog name={'Alex'} id={3}/>
                  <Dialog name={'Mike'} id={4}/>
                  <Dialog name={'Sandra'} id={5}/>
              </div>
                <div className="messages">
                    <Message message={'Hello!'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'What are you doing?'}/>
                </div>
            </div>
        </div>
    );
};

