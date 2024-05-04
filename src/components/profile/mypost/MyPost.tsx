import React, {ChangeEvent, MouseEventHandler, useRef} from 'react';
import s from './MyPost.module.css'
import {Post} from './post/Post';
import {StateType, updatePostText} from '../../../redux/state';


type MyPostType = {
    state: StateType
    addPost: () => void
    updatePostText: (newPostText: string) => void
}

export const MyPost = ({state, addPost}: MyPostType) => {
    let newPost = useRef<HTMLTextAreaElement>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = e.currentTarget.value
        updatePostText(newPost)

    }
    const onClickHandler = () => {
        addPost()
        updatePostText('')

    }

    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} value={state.profile.newPostText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            {state.profile.posts.map(p => {
                return (
                    <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
                )
            })}
        </div>
    );
};

