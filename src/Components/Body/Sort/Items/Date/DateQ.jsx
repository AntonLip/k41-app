import React from 'react'
import { BsCalendar } from "react-icons/bs";
import { Field } from 'redux-form';

import Item from '../Item'


const DateQ = (props) => {
    return (
        <Item img={<BsCalendar/>} title={props.title}>
            <Field type="date" component="input" name={props.name} class="sort-submenu__select"/>
        </Item>
    )
}

export default DateQ
