import React from 'react'
import SortItem from './../../../Sort/SortItem'

import DropDown from '../../../Sort/Items/Dropdown/Dropdown'
import Filter from '../../../Sort/Items/Filter/Filter'

export const Menu = (props) => {
    return (
        <SortItem>
            <DropDown title="Звание" />
            <DropDown title="Подразделение" />
            <DropDown title="Должность" />
            <Filter/>
        </SortItem>
    )
}
