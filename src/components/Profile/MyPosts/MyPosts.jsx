import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'privet', likesCount: 11}
    ]

    let postsElements = posts.map((p, index) => <Post message={p.message} key={index} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts