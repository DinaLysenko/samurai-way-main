import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPost} from "./mypost/MyPost";
import {StateType, updatePostText} from '../../redux/state';

type ProfileType={
    state: StateType
    addPost: (text: string)=>void
    updatePostText:(newPost: string)=>void
}

export const Profile = ({state, addPost}:ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost state={state} addPost={addPost} updatePostText={updatePostText}/>
        </div>
    );
};

