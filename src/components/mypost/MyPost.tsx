import React from 'react';
import {Post} from "../post/Post";
import s from './MyPost.module.css'
import {postData} from "../../data/postData";


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
            {postData.post.map(p => {
                return (
                    <Post message={p.message} likeCount={p.likeCount}/>
                )
            })}
        </div>
    );
};

