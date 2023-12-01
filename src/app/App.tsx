import React from 'react';
import './App.css';
import {Navbar} from "../layout/navbar/Navbar";
import {Profile} from "../layout/profile/Profile";
import {Header} from "../layout/header/Header";



function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
