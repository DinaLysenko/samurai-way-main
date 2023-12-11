import React from 'react';
import s from './Profile.module.css'
import {MyPost} from "./mypost/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
};

