import React from 'react'
import Message from './Message/Message'
import { GrChatOption } from "react-icons/gr";

const Chat = (props) => {
    const [isActive, setIsActive] = React.useState(false)

    function toogleVisible (){
        setIsActive(!isActive);
    }

    return (
        <>
            <div class={"chat" + " " + (isActive ? "chat--active" : "")}>
                <div class="chat-sms chat__sms">
                    <Message from="true"/>
                    <Message/>
                    <Message from="true"/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <form class="chat-input chat__input">
                    <textarea class="chat-input__text" rows="3"></textarea>
                    <input type="submit" class="chat-input__submit btn" value="Отправить"></input>
                </form>
            </div>
            <div class="chat-icon" onClick={toogleVisible}>
                <GrChatOption/>
            </div>
        </>
    )
}

export default Chat
