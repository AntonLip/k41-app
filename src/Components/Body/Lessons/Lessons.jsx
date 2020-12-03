import React from 'react'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'

const year = [
    {title: "3 курс"},
    {title: "4 курс"},
    {title: "5 курс"}
]

const Lessons = () => {
    return (
        <div class="cards">
            <Sort>
                <Dropdown title="От кого новость" link={year} size="3"/>
                <Dropdown title="Кому новость" link={year} size="3"/>
                <Dropdown title="Кому новость" link={year} size="3"/>
                <Dropdown title="Кому новость" link={year} size="3"/>
                <Dropdown title="Кому новость" link={year} size="3"/>
                <Dropdown title="Кому новость" link={year} size="3"/>
            </Sort>
            <div class="cards__content">
                <Item title="Основы автоматики"/>
                <Item title="Основы автоматики"/>
                <Item title="Основы автоматики"/>
                <Item title="Основы автоматики"/>
            </div>
        </div>
    )
}

export default Lessons

