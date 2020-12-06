import React from 'react'
import Message from './Message/Message'
import ItemLeftSideBar from '../ItemLeftSideBar'
const Chat = (props) => {
    return (
        <ItemLeftSideBar itemTitle={props.itemTitle}>
            <div class="leftsitebar-chat leftsitebar__chat">
                <div class="leftsitebar-chat-sms leftsitebar-chat__sms">
                    <Message from="true"/>
                    <Message/>
                    <Message from="true"/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <form class="leftsitebar-chat-input leftsitebar-chat__input">
                    <textarea class="leftsitebar-chat-input__text" rows="3"></textarea>
                    <input type="submit" class="leftsitebar-chat-input__submit btn" value="Отправить"></input>
                </form>
            </div>
        </ItemLeftSideBar>
    )
}

export default Chat
