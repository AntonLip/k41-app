import React from 'react'
import InputItem from '../InputItem'

const InputFile = (props) => {
    return (
        <InputItem title={props.title}>
            <input type="file"/>
        </InputItem>
    )
}

export default InputFile
