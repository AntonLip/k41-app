import React from 'react'
import {AiOutlineClear } from "react-icons/ai";

const Clear = (props) => {
    const resForm = () =>{
        props.parentProps.reset();
        props.clear({From: "", To: "", DateFrom: "", DateTo: ""})
        
    }
    return (
        <>
            <button onClick={resForm} type="button" class="sort__item sort__item--btn">
                    <div class="sort__title">Очистить фильтры</div>
                    <div class="sort__img">{<AiOutlineClear/>}</div>     
            </button>
        </>

    )
}

export default Clear
