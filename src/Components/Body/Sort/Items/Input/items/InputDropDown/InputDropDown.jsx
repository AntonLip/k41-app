import React from 'react'
import InputItem from '../InputItem'

const InputDropDown = (props) => {
    return (
        <InputItem title={props.title}>
            <select name="who" size="1" class="sort-submenu__select">
                <option>Всем</option>
                {props.link && props.link.map(item => {
                    return <option>{item.name}</option>
                })}
            </select>
        </InputItem>
    )
}

export default InputDropDown
