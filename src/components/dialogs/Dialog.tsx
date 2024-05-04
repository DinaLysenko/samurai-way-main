import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {MessageType} from '../../redux/state';


type DialogPropsType={
    dialogs: MessageType[]
}
export const Dialog:React.FC<DialogPropsType> = ({dialogs}) => {
   return (
       <div>
           {dialogs.map(d=>{
               return (
                   <div key={d.id} className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink></div>
               )
           } )}
       </div>
   )
};

