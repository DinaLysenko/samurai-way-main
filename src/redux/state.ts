import {v1} from 'uuid';


export const state: StateType = {
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
                name: 'Mike',
                userMessage: [
                    {id: v1(), message: 'Hi'},
                ]
            },
            {
                id: v1(),
                name: 'James',
                userMessage: [
                    {id: v1(), message: 'YO'},
                ]
            },
            {
                id: v1(),
                name: 'Maria',
                userMessage: [
                    {id: v1(), message: 'Bye'},
                ]
            },
            {
                id: v1(),
                name: 'Margo',
                userMessage: [
                    {id: v1(), message: 'Hello'},
                ]
            },
            {
                id: v1(),
                name: 'Sandra',
                userMessage: [
                    {id: v1(), message: 'Yo'}
                ]
            },
        ]
    }
}
export const addPost = () => {
    let newPost = {id: v1(), message: state.profile.newPostText, likeCount: 0}
    state.profile.posts.push(newPost)
    notifySubscriber()
}
export const updatePostText = (newPost: string) => {
    state.profile.newPostText = newPost
    notifySubscriber()
}
let notifySubscriber=()=>{}
 export function subscriber(callback:()=>void){
    notifySubscriber=callback
 }


export type StateType = {
    profile: PostDataState
    messages: MessagesType
}
export type MessagesType = {
    dialogs: MessageType[]
}

export type MessageType = {
    id: string,
    name: string,
    userMessage: UserMessageType[]
}
export type UserMessageType={
    id: string,
    message: string
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
