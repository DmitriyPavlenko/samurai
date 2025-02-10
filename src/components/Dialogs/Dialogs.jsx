import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ]

    let messages = [
        {id: 1, message: 'yeeeh'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'yo'},
    ]

    let dialogsElements = dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id}/>)
    let messagesElements = messages.map((m, index) => <Message key={index} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;