import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'



export const CheckboxArea = (props) => {
    
    return (
        <InputItem title={props.title} >
            <Field name={props.name} size={props.size} component="input" type="checkbox" class="chat-input__text">
            </Field>
        </InputItem> 
    )
}

