import s from './Profile.module.css'
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://piligrim.ua/wp-content/uploads/2021/08/Kendwa.jpg" alt=""/>
            <div>ava+description</div>
            <MyPosts hey='yo'/>
        </div>
    )
}

export default Profile