import React from 'react'

import Dropdown from './Items/Dropdown/Dropdown'
import Date from './Items/Date/DateQ'
import Input from './Items/Input/Input'
import { compose } from 'redux'



const SortItem = (props) => {

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        parentProps: {...props}
      })
    })
  }
  console.log(props)
    return (
      <div class="sort cards__sort">
        <form class="sort-submenu__form" onSubmit={props.handleSubmit}>
          {renderChildren()}
        </form>
      </div>
    )
}

export default SortItem

