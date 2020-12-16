import React from 'react'

const InputItem = (props) => {
    return (
        <div class="chat-input__text">{props.title+":"}
            {props.children}
        </div>
            
    )
}

export default InputItem
