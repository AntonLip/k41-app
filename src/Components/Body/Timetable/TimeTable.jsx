import React from 'react'

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Date from '../Sort/Items/Date/Date'
import Item from './Item/Item'

const podr = [
    {title:"413"},
    {title:"414"},
    {title:"415"},
]
const pred = [
    {title:"SAU"},
    {title:"OIT"},
    {title:"EPRET"},
]
const who = [
    {title:"Шарак"},
    {title:"Белоус"},
    {title:"Куренев"},
]


const TimeTable = (props) => {
    return (
        <MainContentWrapper leftSideBar="true">
            <div></div>
            <div class="timetable">
                <Sort>
                    <Dropdown title="Учебный взвод" link={podr} size="10"/>
                    <Dropdown title="Учебный предмет" link={pred} size="10"/>
                    <Dropdown title="Преподаватель" link={who} size="10"/>
                    <Date title="С какой даты"/>
                    <Date title="По какую дату"/>
                </Sort>
                <div class="timetable__wrapper">
                    <Item/>
                </div>
            </div>
        </MainContentWrapper>
        
    )
}

export default TimeTable