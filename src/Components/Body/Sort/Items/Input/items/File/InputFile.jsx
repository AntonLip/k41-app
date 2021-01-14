import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

const InputFile = (props) => {
    return (
        <InputItem title={props.title}>
            <Field name={props.name} component={FileInput} type="file" class="chat-input__text"/>
        </InputItem>
    )
}

export default InputFile
