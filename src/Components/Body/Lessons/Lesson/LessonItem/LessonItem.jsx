import React from 'react'

import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';

const LessonItem = (props) => {
    const [isActive, setIsActive]=React.useState(false)

    function toggleActive(){
        setIsActive(!isActive)
    }
    return (
        <>
            <div class="d-f ai-c mb">
                <div class="w-100">
                    <div class={"sort__item" + " "+ (isActive ? "sort__item--active" : "")} onClick={toggleActive}>
                        <div class="sort__title">{props.title}</div>
                        <div class="sort__nav"> 
                            <div class="sort__img sort__img--ml">{isActive ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                        </div>
                    </div>
                    <div class="sort-submenu sort__submenu">             
                        {props.children}
                    </div> 
                </div>
                <Link to={props.lessonId + "/edit"} class="sort__img sort__img--ml" ><FiEdit /></Link>
                
                <div class="sort__img sort__img--ml"><AiOutlineDelete onClick={()=>alert("Delite")}/></div>
            </div>
        </> 
    )
}

export default LessonItem
