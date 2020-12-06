import React from 'react'

import Dropdown from './Items/Dropdown/Dropdown'
import Date from './Items/Date/Date'
import Input from './Items/Input/Input'



const SortItem = (props) => {
    return (
      <div class="sort cards__sort">
        {props.children}
      </div>
    )
}

export default SortItem

/*
 
*/