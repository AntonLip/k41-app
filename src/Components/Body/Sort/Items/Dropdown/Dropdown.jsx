import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";

import Item from '../Item'



const Dropdown = (props) => {
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
            <select name="who" size={props.size} class="sort-submenu__select">
                {props.link && props.link.map(item => {
                    return <option>{item.name}</option>
                })}
            </select>
        </Item> 
    )
}

export default Dropdown
