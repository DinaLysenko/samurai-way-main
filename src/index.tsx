import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state, StateType, subscriber, updatePostText} from './redux/state';
export function rerender(){
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,

        document.getElementById('root')
    );}

rerender()
subscriber(rerender)