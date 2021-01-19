import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'



const TextInput = (props) => {
      
    return (
        <InputItem title={props.title}>
            <Field name={props.name} class="chat-input__text" component="input" type="text"></Field>
        </InputItem> 
    )
}

export default TextInput
