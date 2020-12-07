import React from 'react'

const Item = (props) => {
    const [isActive, setIsActive]=React.useState(false)

    function toggleActive(){
        setIsActive(!isActive)
    }

    return (
        <>
            <div class={"sort__item" + " "+ (isActive ? "sort__item--active" : "")} onClick={toggleActive}>
                <div class="sort__title">{props.title}</div>
                <div class="sort__img">{isActive && props.imgActive ? props.imgActive : props.img}</div>     
            </div>
            <div class="sort-submenu sort__submenu">             
                {props.children}
            </div> 
        </> 
    )
}

export default Item
