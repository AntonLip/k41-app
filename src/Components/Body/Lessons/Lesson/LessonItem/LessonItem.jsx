import React from 'react'

import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";

const LessonItem = (props) => {
    const [isActive, setIsActive]=React.useState(false)

    function toggleActive(){
        setIsActive(!isActive)
    }
    return (
        <>
            <div class={"sort__item sort__item--mt" + " "+ (isActive ? "sort__item--active" : "")} onClick={toggleActive}>
                <div class="sort__title">{props.title}</div>
                <div class="sort__nav"> 
                    <div class="sort__img"><FiEdit/></div>
                    <div class="sort__img sort__img--ml"><AiOutlineDelete/></div>
                    <div class="sort__img sort__img--ml">{isActive ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                </div>   
            </div>
            <div class="sort-submenu sort__submenu">             
                {props.children}
            </div> 
        </> 
    )
}

export default LessonItem
