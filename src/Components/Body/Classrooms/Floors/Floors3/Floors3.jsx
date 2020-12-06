import React from 'react'
import {Link} from 'react-router-dom'

import Floor from '../Floor'

const Floors3 = () => {
    return (
        <Floor title="Этаж 3">
            <div id="et3" class="classrooms__etaj">
                <Link to="/classrooms/382" id="k382" class="classrooms__kab classrooms__kab--Uch"><span>382</span></Link>
                <Link to="/classrooms/381" id="k381" class="classrooms__kab classrooms__kab--Uch"><span>381</span></Link>
                <Link to="/classrooms/380" id="k380" class="classrooms__kab classrooms__kab--Uch"><span>380</span></Link>
                <Link to="/classrooms/379" id="k379" class="classrooms__kab classrooms__kab--Prepod"><span>379</span></Link>
                <div class="classrooms__kor"></div>
            </div> 
        </Floor>
    )
}

export default Floors3
