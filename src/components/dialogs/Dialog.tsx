import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../data/dialogsState";

type DialogPropsType={
    dialogs: DialogsType[]
}
export const Dialog:React.FC<DialogPropsType> = ({dialogs}) => {
   return (
       <div>
           {dialogs.map(d=>{
               return (
                   <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink></div>
               )
           } )}
       </div>
   )
};

