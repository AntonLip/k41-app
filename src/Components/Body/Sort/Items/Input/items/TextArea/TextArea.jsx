import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'



const TextArea = (props) => {
    return (
        <InputItem title={props.title}>
            <Field name={props.name} class="chat-input__text" rows={props.size} component="textarea"></Field>
        </InputItem> 
    )
}

export default TextArea
