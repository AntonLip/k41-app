import React from 'react'




const SortItem = (props) => {

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        parentProps: {...props}
      })
    })
  }
    return (
      <div class="sort cards__sort">
        <form class="sort-submenu__form" onSubmit={props.handleSubmit}>
          {renderChildren()}
        </form>
      </div>
    )
}

export default SortItem

