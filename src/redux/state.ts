import {v1} from "uuid";
import {rerender} from '../rerender';

export const state:StateType = {
    profile: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likeCount: 15},
            {id: v1(), message: 'It is my first post', likeCount: 30},
            {id: v1(), message: 'I learn React', likeCount: 8}
        ],
        newPostText: ''
    },
    messages: {
        dialogs: [
            {
                id: v1(),
                name: 'Mike'
            },
            {
                id: v1(),
                name: 'James',
            },
            {
                id: v1(),
                name: 'Maria'
            },
            {
                id: v1(),
                name: 'Margo'
            },
            {
                id: v1(),
                name: 'Sandra'
            },
        ],
        message:[
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'YO'},
            {id: v1(), message: 'Bye'},
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'Yo'},
        ]
    }
}
export const addPost=(text:string)=>{
    let newPost={id: v1(), message: text, likeCount: 0}
    state.profile.posts.push(newPost)
    rerender(state)
}
console.log(state.profile.posts)
export const updatePostText=(newPost:string)=>{
    state.profile.newPostText=newPost
    console.log(state.profile.newPostText)
}
export type StateType ={
    profile: PostDataState
    messages: MessagesType
}
export type MessagesType={
    dialogs: DialogsType[]
    message: MessageType[]
}
export type DialogsType ={
    name: string
    id: string
}
export type MessageType={
    message: string
    id: string
}
export type PostDataState = {
    posts: PostType[]
    newPostText: string
}
export type PostType = {
    id: string
    message: string
    likeCount: number
}
