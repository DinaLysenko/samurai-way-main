import React from 'react';
import s from "./Dialogs.module.css";

type MessageProps={
    message: string
}
export const Message:React.FC<MessageProps> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    );
};

