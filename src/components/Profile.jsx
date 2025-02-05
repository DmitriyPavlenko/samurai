import s from './Profile.module.css'

const Profile = () => {
    return (<div className={s.content}>
        <img src="https://piligrim.ua/wp-content/uploads/2021/08/Kendwa.jpg" alt=""/>
        <div>ava+description</div>
        <div className={s.posts}>
            My posts
            <div>
                New post
            </div>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post2
            </div>
        </div>
    </div>)
}

export default Profile