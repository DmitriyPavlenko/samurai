import s from   './Navbar.module.css'

const Sidebar = (props) => {


    return (
        <div className={s.nav}>

            {props.id} . {props.name}


        </div>
    )
}
export default Sidebar