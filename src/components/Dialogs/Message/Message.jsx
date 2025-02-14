import s from './../Dialogs.module.css'
import React from "react";

const Message = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        let textMessage = newMessage.current.value
        alert(textMessage)
    }

    return (
        <>
        <div className={s.dialog}>{props.message}
        </div>
    <div>
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}>Add message</button>
    </div>
        </>
)
}

export default Message;