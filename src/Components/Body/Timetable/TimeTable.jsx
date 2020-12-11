import React from 'react'

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Date from '../Sort/Items/Date/Date'
import Item from './Item/Item'
import {reduxForm} from 'redux-form'

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

const SortForm = reduxForm({form: 'sortTimetable'})(Sort)

const TimeTable = () => {

    const printInfo=(values)=>{
        console.log(values)
      }

    return (
        <MainContentWrapper leftSideBar="true">
            <div></div>
            <div class="timetable">
            <SortForm onSubmit={printInfo}>
                    <Dropdown title="Учебный взвод" link={podr} size="10" name="department"/>
                    <Dropdown title="Учебный предмет" link={pred} size="10" name="lesson"/>
                    <Dropdown title="Преподаватель" link={who} size="10" name="lector"/>
                    <Date title="С какой даты" name="dateFrom"/>
                    <Date title="По какую дату" name="dateTo"/>
                    <Filter />
                </SortForm>
                <div class="timetable__wrapper">
                    <Item/>
                </div>
            </div>
        </MainContentWrapper>
        
    )
}



export default TimeTable
