import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'

import {reduxForm} from 'redux-form'

const year = [
    {title: "3 курс"},
    {title: "4 курс"},
    {title: "5 курс"}
]

const SortForm = reduxForm({form: 'sortLessons'})(Sort)

const Lessons = () => {
    const printInfo=(values)=>{
        console.log(values)
    }
    return (
        <MainContentWrapper leftSideBar="true">
            <SortForm onSubmit={printInfo}>
                <Dropdown title="САФ" link={year} size="3" name="SAF"/>
                <Dropdown title="ОБИТО" link={year} size="3" name="OBITO"/>
                <Dropdown title="АСУ ПС" link={year} size="3" name="ASUPS"/>
                <Dropdown title="АСУ ЗРВ" link={year} size="3" name="ASUZRV"/>
                <Dropdown title="АСУ РТВ" link={year} size="3" name="ASURTV"/>
                <Dropdown title="АСУ ВВС" link={year} size="3" name="ASUVVS"/>
                <Dropdown title="АСУ СВ" link={year} size="3" name="ASUSV"/>
                <Filter/>
            </SortForm>
            <div class="cards">
                <div class="cards__content">
                    <Item title="Основы автоматики"/>
                    <Item title="Основы автоматики"/>
                    <Item title="Основы автоматики"/>
                    <Item title="Основы автоматики"/>
                </div>
            </div>
        </MainContentWrapper>
        
    )
}



export default Lessons

