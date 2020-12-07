import React from 'react'

const Message = (props) => {
    return (
        <div class={props.from ? "chat-sms__item chat-sms__item--from" : "chat-sms__item chat-sms__item--my"}>
            <div class="chat-sms__img"><a href="#"><img src="assets/img/Ковылов.jpg" alt="user_img"></img></a></div>
            <div class="chat-sms__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, similique.</div>
        </div>
    )
}

export default Message
