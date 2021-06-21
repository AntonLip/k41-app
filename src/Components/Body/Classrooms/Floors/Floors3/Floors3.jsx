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
    debugger
    return (
        <Floor title="Этаж 3">
            <div id="et3" class="classrooms__etaj">
                {
                    props.windowsState.k382 === undefined ? <Link to="/classrooms/382" id="k382" class={isHaveKey(props.windowsState, "k382") ?
                        "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows" :
                        "classrooms__kab classrooms__kab--Uch"}><span>382</span></Link>
                        : <Link to="/classrooms/382" id="k382" class={props.windowsState.k382 == 1 ?
                            "classrooms__kab classrooms__kab--Uch" : "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows"}><span>382</span></Link>
                }

                {
                    props.windowsState.k381 === undefined ? <Link to="/classrooms/381" id="k381" class={isHaveKey(props.windowsState, "k381") ?
                        "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows" :
                        "classrooms__kab classrooms__kab--Uch"}><span>381</span></Link> :
                        <Link to="/classrooms/381" id="k381" class={props.windowsState.k381 == 1 ?
                            "classrooms__kab classrooms__kab--Uch" : "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows"}><span>381</span></Link>
                }

                {
                    props.windowsState.k380 === undefined ? <Link to="/classrooms/380" id="k380" class={isHaveKey(props.windowsState, "k380") ?
                        "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows" :
                        "classrooms__kab classrooms__kab--Uch"}><span>380</span></Link> :
                        <Link to="/classrooms/381" id="k381" class={props.windowsState.k380 == 1 ?
                            "classrooms__kab classrooms__kab--Uch" : "classrooms__kab classrooms__kab--Uch classrooms__kab--open-windows"}><span>380</span></Link>
                }

                <Link to="/classrooms/379" id="k379" class="classrooms__kab classrooms__kab--Prepod"><span>379</span></Link>
                <div class="classrooms__kor"></div>
            </div>
        </Floor>
    )
}

export default Floors3

