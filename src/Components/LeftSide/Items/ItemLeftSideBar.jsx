import React from 'react';

const ItemLeftSideBar = (props) => {
    return (
        <div  class="leftsitebar__item">
            <div class="leftsitebar__title">
                {props.itemTitle}
            </div>
            {props.children}
        </div>
      )
    }
  
export default ItemLeftSideBar