import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {

    let friendsItem = props.friends.map((d, index) => <Sidebar key={index} name={d.name} id={d.id}/>)

    return (
    <>
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({ isActive }) =>(isActive ? (s.active) : "")}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className={({ isActive }) =>(isActive ? (s.active) : "")}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a><
            /div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        {friendsItem}
    </nav>

    </>
)
}

export default Navbar