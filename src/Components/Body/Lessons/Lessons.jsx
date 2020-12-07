import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'

const year = [
    {title: "3 курс"},
    {title: "4 курс"},
    {title: "5 курс"}
]

const Lessons = () => {
    return (
        <MainContentWrapper leftSideBar="true">
            <Sort>
                <Dropdown title="САФ" link={year} size="3"/>
                <Dropdown title="ОБИТО" link={year} size="3"/>
                <Dropdown title="АСУ ПС" link={year} size="3"/>
                <Dropdown title="АСУ ЗРВ" link={year} size="3"/>
                <Dropdown title="АСУ РТВ" link={year} size="3"/>
                <Dropdown title="АСУ ВВС" link={year} size="3"/>
                <Dropdown title="АСУ СВ" link={year} size="3"/>
                <Filter/>
            </Sort>
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

