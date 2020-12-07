import React from 'react'
import { BiFilterAlt } from "react-icons/bi";

import Item from '../Item'



const Filter = () => {
    return (
        <>
            <button class="sort__item sort__item--btn">
                    <div class="sort__title">Отсортировать</div>
                    <div class="sort__img">{<BiFilterAlt/>}</div>     
            </button>
        </>
    )
}

export default Filter
