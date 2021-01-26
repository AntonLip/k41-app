import React from 'react'
import { Link } from 'react-router-dom'

import Floor from '../Floor'

const Floors3 = (props) => {

    const isHaveKey = (obj, key) => {
        if (typeof obj[key] != undefined) {
            if (typeof obj[key] == 1) {
                return true
            }
            return false
        }
    }

    return (
        <Floor title="Этаж 3">
            <div id="et3" class="classrooms__etaj">

                <Link to="/classrooms/382" id="k382" class="classrooms__kab classrooms__kab--Uch"><span>382</span></Link>


                <Link to="/classrooms/381" id="k381" class={isHaveKey(props.windowsState, "381") ?
                    "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows" :
                    "classrooms__kab classrooms__kab--Uch"}><span>381</span></Link>

                <Link to="/classrooms/380" id="k380" class="classrooms__kab classrooms__kab--Uch"><span>380</span></Link>
                <Link to="/classrooms/379" id="k379" class="classrooms__kab classrooms__kab--Prepod"><span>379</span></Link>
                <div class="classrooms__kor"></div>
            </div>
        </Floor>
    )
}

export default Floors3

