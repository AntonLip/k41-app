import React from 'react'
import { BsCalendar } from "react-icons/bs";

import Item from '../Item'


const DateQ = (props) => {
    return (
        <Item img={<BsCalendar/>} title={props.title}>
                <input type="date" name="calendar" class="sort-submenu__select"/>
        </Item>
    )
}

export default DateQ
