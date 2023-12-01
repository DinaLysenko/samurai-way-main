import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            < img className={s.headerLogo}
                  src={logo}/>
        </header>
    );
};

