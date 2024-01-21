import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import {dialogsData} from "../../data/dialogsState";
export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
              <div className={s.dialogsItem}>
                  <Dialog dialogs={dialogsData.dialogs}/>
              </div>
                <div className="messages">
                    <Message message={dialogsData.message}/>
                </div>
            </div>
        </div>
    );
};

