import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsElements = props.posts.map((p, index) => <Post message={p.message} key={index} likesCount={p.likesCount}/>)

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