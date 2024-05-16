import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPost} from "./mypost/MyPost";
import {StateType,} from '../../redux/state';

type ProfileType={
    state: StateType
    addPost: ()=>void
    updatePostText:(newPost: string)=>void
}

export const Profile = ({state, addPost, updatePostText}:ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost state={state} addPost={addPost} updatePostText={updatePostText}/>
        </div>
    );
};

