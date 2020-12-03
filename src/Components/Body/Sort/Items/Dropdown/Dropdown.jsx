import React from 'react'

import Item from '../Item'

import trianglImg from '../../../../../assets/img/triangl.png'



const Dropdown = (props) => {
    return (
        <Item img={trianglImg} title={props.title}>
            <form class="sort-submenu__form">
                <select name="who" size={props.size} class="sort-submenu__select">
                    {props.link && props.link.map(item => {
                        return <option>{item.title}</option>
                    })}
                </select>
            </form>
        </Item> 
    )
}

export default Dropdown
