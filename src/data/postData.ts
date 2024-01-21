export const postData: PostDataState={
    post: [
        {id:'0', message:'Hi, how are you?', likeCount: 15},
        {id:'1', message:'It is my first post', likeCount: 30},
        {id:'2', message:'I learn Reakt', likeCount: 8}
    ]
}
export type PostDataState={
    post: Post[]
}
type Post={
    id: string
    message: string
    likeCount: number
}