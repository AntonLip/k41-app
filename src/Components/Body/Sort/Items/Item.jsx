import React from 'react'

const Item = (props) => {
    return (
        <div class="sort__item">
            <div class="sort__title">{props.title}</div>
            <div class="sort__img"><img src={props.img} alt=""></img></div>
            <div class="sort-submenu sort__submenu">             
                {props.children}
            </div>       
        </div>
    )
}

export default Item
