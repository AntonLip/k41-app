import React from 'react'

import Item from '../Item'

import trianglImg from '../../../../../assets/img/triangl.png'



const Dropdown = (props) => {
    return (
        <Item img={trianglImg} title={props.title}>
            <select name="who" size={props.size} class="sort-submenu__select">
                {props.link && props.link.map(item => {
                    return <option>{item.title}</option>
                })}
            </select>
        </Item> 
    )
}

export default Dropdown
