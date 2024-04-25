import React from 'react';
import s from './Post.module.css';

type PostType ={
    message: string
    likeCount: number
}
export const Post:React.FC<PostType> = (props) => {
    const{message, likeCount}=props
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"/>
                <span>{message}</span>
            </div>
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>
    );
};

