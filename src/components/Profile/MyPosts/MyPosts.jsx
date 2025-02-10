import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'privet', likesCount: 11}
    ]

    return (
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        </div>
    )
}

export default MyPosts