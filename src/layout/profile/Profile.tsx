import React from 'react';
import s from './Profile.module.css'
import {MyPost} from "./mypost/MyPost";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='/>
            </div>
            <div>ava+description</div>
            <MyPost/>
        </div>
    );
};

