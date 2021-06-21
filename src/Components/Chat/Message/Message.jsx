import React from 'react'

const Message = (props) => {
    return (
        <div class={props.from ? "chat-sms__item chat-sms__item--from" : "chat-sms__item chat-sms__item--my"}>
           
        </div>
    )
}

export default Message
