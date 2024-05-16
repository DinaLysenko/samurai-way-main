import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/state';
export function rerender(){
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
        </BrowserRouter>,

        document.getElementById('root')
    );}

rerender()
store.subscriber(rerender)