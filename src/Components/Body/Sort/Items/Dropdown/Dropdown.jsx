import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { Field } from 'redux-form';

import Item from '../Item'



const Dropdown = (props) => {
    
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
            <Field name={props.name} size={props.size} component="select" class="sort-submenu__select">
                <option/>
                {props.link.map((item,index) => {
                    return <option value={item.name}>{item.name}</option>
                })}
            </Field>
        </Item> 
    )
}

export default Dropdown
