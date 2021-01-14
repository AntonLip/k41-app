import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'

const InputDropDown = (props) => {
    return (
        <InputItem title={props.title}>
            <Field name={props.name} size="1" class="sort-submenu__select" component="select">
                <option/>
                {props.link && props.link.map(item => {
                    return <option value={item.name}>{item.name}</option>
                })}
            </Field>
        </InputItem>
    )
}

export default InputDropDown
