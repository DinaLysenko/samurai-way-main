import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogProps={
    name: string
    id: number
}
export const Dialog:React.FC<DialogProps> = ({name, id}) => {
    return (
            <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/' + id}>{name}</NavLink></div>
    );
};

