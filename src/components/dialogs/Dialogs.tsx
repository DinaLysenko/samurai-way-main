import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import {StateType} from "../../redux/state";

type DialogsType={
    state: StateType
}
export const Dialogs:React.FC<DialogsType> = ({state}) => {
    return (
        <div>
            <div className={s.dialogs}>
              <div className={s.dialogsItem}>
                  <Dialog dialogs={state.messages.dialogs}/>
              </div>
                <div className="messages">
                    <Message message={state.messages.dialogs}/>
                </div>
            </div>
        </div>
    );
};

