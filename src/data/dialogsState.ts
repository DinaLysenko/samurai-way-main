export const dialogsData:DialogsState = {
    dialogs: [
        {
            id: '0',
            name: 'Mike'
        },
        {
            id: '1',
            name: 'James',
        },
        {
            id: '2',
            name: 'Maria'
        },
        {
            id: '3',
            name: 'Margo'
        },
        {
            id: '4',
            name: 'Sandra'
        },
    ],
    message:[
        {id: '0', message: 'Hi'},
        {id: '1', message: 'YO'},
        {id: '2', message: 'Bye'},
        {id: '3', message: 'Hello'},
        {id: '4', message: 'Yo'},
    ]
}

export type DialogsState ={
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
