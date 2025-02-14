import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p, index) => <Post message={p.message} key={index} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts