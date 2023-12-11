import React from 'react';
import {Post} from "../post/Post";
import s from './MyPost.module.css'



export const MyPost = () => {
    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post  message={'Hi, how are you?'} likeCount={15}/>
            <Post message={"It's my first post"} likeCount={8}/>
            <Post message={'I learn Reakt'} likeCount={30}/>
        </div>
    );
};

