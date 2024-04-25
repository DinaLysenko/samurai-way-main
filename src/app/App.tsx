import React from 'react';
import './App.css';
import {Navbar} from "../layout/navbar/Navbar";
import {Header} from "../layout/header/Header";
import {Dialogs} from "../components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "../components/news/News";
import {Music} from "../components/music/Music";
import {Settings} from "../components/settings/Settings";
import {Profile} from "../components/profile/Profile";
import {StateType, updatePostText} from '../redux/state';

type State={
    state: StateType
    addPost:(text: string)=>void
    updatePostText: (newPost: string)=>void
}
function App(props: State) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={()=><Profile state={props.state} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
                <Route path='/dialogs' render={()=><Dialogs state={props.state} />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;
