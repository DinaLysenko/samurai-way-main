import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state, StateType, updatePostText} from './redux/state';
export function rerender(state:StateType){
ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </BrowserRouter>,

  document.getElementById('root')
);}