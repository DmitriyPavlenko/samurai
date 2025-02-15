import {rerenderEntireTree} from "../../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 12},
            {id: 2, message: 'privet', likesCount: 11}
        ],
        newPostText: `It-kamasutra`
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'yeeeh'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    }
}

window.state = state

export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state