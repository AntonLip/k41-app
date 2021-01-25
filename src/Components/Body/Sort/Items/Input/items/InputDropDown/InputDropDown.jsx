import React from 'react'
import { Field } from 'redux-form'
import InputItem from '../InputItem'

const InputDropDown = (props) => {
    console.log(props)
    return (
        <InputItem title={props.title}>
            <Field name={props.name} size={props.size} class="sort-submenu__select" component="select">
                <option />
                {props.other && props.other.map(item => {
                    return <option value={item.value}>{item.name}</option>
                })}
                {props.link && props.link.map(item => {
                    return <option value={item.name}>{item.name}</option>
                })}
                {props.linkWithId && props.linkWithId.map(item => {
                    return <option value={item.id}>{item.name}</option>
                })}
            </Field>
        </InputItem>
    )
}

export default InputDropDown
