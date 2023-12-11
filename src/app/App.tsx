import React from 'react';
import './App.css';
import {Navbar} from "../layout/navbar/Navbar";
import {Header} from "../layout/header/Header";
import {Profile} from "../components/Profile";
import {Dialogs} from "../components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "../components/news/News";
import {Music} from "../components/music/Music";
import {Settings} from "../components/settings/Settings";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                {/*<Profile/>*/}
                {/*<Dialogs/>*/}
            </div>



        </div>
    );
}


export default App;
