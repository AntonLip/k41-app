import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'
import { ImageUpload } from './ImageUploader';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const FileInput = ({ 
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
//"http://localhost:56224/api/Timetable"
const InputFile = (props) => {
    return (
        <InputItem title={props.title}>
             <ImageUpload url={props.url}/> 
        </InputItem>
    )
}
export default InputFile
