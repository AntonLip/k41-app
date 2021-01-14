import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'

const InputFile = (props) => {
    return (
        <InputItem title={props.title}>
            <Field name={props.name} component="input" type="file" class="chat-input__text"/>
        </InputItem>
    )
}
export default InputFile
