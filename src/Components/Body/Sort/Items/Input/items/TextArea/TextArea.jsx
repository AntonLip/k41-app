import React from 'react'
import InputItem from '../InputItem'

const TextArea = (props) => {
    return (
        <InputItem title={props.title}>
            <textarea class="chat-input__text" rows={props.size}></textarea>
        </InputItem> 
    )
}

export default TextArea
