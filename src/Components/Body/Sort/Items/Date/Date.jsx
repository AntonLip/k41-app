import React from 'react'

import Item from '../Item'

import imgDate from '../../../../../assets/img/Date.png'


const Date = (props) => {
    return (
        <Item img={imgDate} title={props.title}>
                <input type="date" name="calendar" class="sort-submenu__select"/>
        </Item>
    )
}

export default Date
