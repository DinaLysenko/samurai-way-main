import {v1} from 'uuid';

export const store: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likeCount: 15},
                {id: v1(), message: 'It is my first post', likeCount: 30},
                {id: v1(), message: 'I learn React', likeCount: 8}
            ],
            newPostText: ''
        },
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
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {id: v1(), message: this._state.profile.newPostText, likeCount: 0}
        this._state.profile.posts.push(newPost)
        this._notifySubscriber()
    },
    updatePostText(newPost: string) {
        this._state.profile.newPostText = newPost
        this._notifySubscriber()
    },
    _notifySubscriber() {
    },
    subscriber(callback: () => void) {
        this._notifySubscriber = callback
    }
}

export type StoreType = {
    _state: StateType
    addPost: () => void
    updatePostText: (newPost: string) => void
    _notifySubscriber: () => void
    subscriber: (callback: () => void) => void
    getState: () => StateType
}
export type StateType = {
    profile: PostDataState
    dialogs: MessageType[]
}

export type MessageType = {
    id: string,
    name: string,
    userMessage: UserMessageType[]
}
export type UserMessageType = {
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
