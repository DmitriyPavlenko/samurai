import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <Post message='How are you?'/>
            <Post message='Hello'/>
        </div>
    )
}

export default MyPosts