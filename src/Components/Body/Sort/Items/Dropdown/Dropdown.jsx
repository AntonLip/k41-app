import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { Field } from 'redux-form';

import Item from '../Item'



const Dropdown = (props) => {
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
<<<<<<< HEAD
            <Field name={props.name} size={props.size} component="select" class="sort-submenu__select">
                <option/>
                {props.link.map((item,index) => {
                    return <option value={item.title}>{item.title}</option>
=======
            <select name="who" size={props.size} class="sort-submenu__select">
                {props.link && props.link.map(item => {
                    return <option>{item.name}</option>
>>>>>>> 72ab880071cf86099e89eef0491e1ff4cfddabbc
                })}
            </Field>
        </Item> 
    )
}

export default Dropdown
