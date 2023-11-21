import React from 'react';
import logo from "../img/logo.png";

export const Header = () => {
    return (
        <header className={'header'}>
            < img className={'headerLogo'}
                  src={logo}/>
        </header>
    );
};

