import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'

const InputDropDown = (props) => {
    return (
        <InputItem title={props.title}>
            <Field name={props.name} size={props.size} component="select" class="sort-submenu__select">            
                <option>Всем</option>
                {props.link && props.link.map(item => {
                    return <option>{item.name}</option>
                })}           
            </Field>
            
        </InputItem>
    )
}

export default InputDropDown
