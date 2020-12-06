import React from 'react'
import {Link} from 'react-router-dom'

import Floor from '../Floor'

const Floors2 = () => {
    return (
        <Floor title="Этаж 2">
            <div id="et2" class="classrooms__etaj">
                <Link to="/classrooms/291" id="k291" class="classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows"><span>291</span></Link>
                <Link to="/classrooms/290a" id="k290a" class="classrooms__kab classrooms__kab--Prepod"><span>290a</span></Link>
                <Link to="/classrooms/290" id="k290" class="classrooms__kab classrooms__kab--Uch"><span>290</span></Link>
                <Link to="/classrooms/289" id="k289" class="classrooms__kab classrooms__kab--Prepod"><span>289</span></Link>
                <div class="classrooms__kor"></div>
            </div>
        </Floor>
    )
}

export default Floors2
