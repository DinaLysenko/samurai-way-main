import React from 'react';
import './App.css';
import {Navbar} from "../layout/navbar/Navbar";
import {Header} from "../layout/header/Header";
import {Profile} from "../components/Profile";
import {Dialogs} from "../components/dialogs/Dialogs";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Dialogs/>
            </div>


            {/*<Profile/>*/}
        </div>
    );
}


export default App;
