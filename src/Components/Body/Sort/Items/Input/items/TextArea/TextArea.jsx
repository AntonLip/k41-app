import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'



const TextArea = (props) => {
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </div>
      )
    return (
        <InputItem title={props.title} >
            <Field name={props.name} size={props.size} component="input" type="text" class="chat-input__text">                
            </Field>
        </InputItem> 
    )
}

export default TextArea
