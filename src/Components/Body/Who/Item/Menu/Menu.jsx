import React from 'react'
import SortItem from './../../../Sort/SortItem'
import DropDown from '../../../Sort/Items/Dropdown/Dropdown'
import Filter from '../../../Sort/Items/Filter/Filter'
import { reduxForm } from 'redux-form'

export const Menu = (props) => {
    debugger
    return (
        <SortItemForm>
            <DropDown title="Звание" link={props.militaryRank}/>
            <DropDown title="Подразделение" link={props.units}/>
            <DropDown title="Должность" link={props.position}/>
            <DropDown title="Научное звание" link={props.academicTitle}/>
            <DropDown title="Научная степень" link={props.academicDegree}/>
            <Filter/>
        </SortItemForm>
    )
}

const SortItemForm = reduxForm({ form: 'sortWho' })(SortItem)