import React from 'react';
import {Post} from "../post/Post";

export const MyPost = () => {
    return (
        <div>My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post  message={'Hi, how are you?'} likeCount={15}/>
            <Post message={"It's my first post"} likeCount={8}/>
            <Post message={'I learn Reakt'} likeCount={30}/>
        </div>
    );
};

