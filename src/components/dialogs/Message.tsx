import React from 'react';
import s from "./Dialogs.module.css";
import {MessageType} from "../../data/dialogsState";

type MessageProps = {
    message: MessageType[]
}
export const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <div>
            {message.map(m => {
                return (
                    <div className={s.message}>{m.message}</div>
                )
            })}
        </div>
    );
};

