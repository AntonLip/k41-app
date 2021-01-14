import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'

import {Input,validate, warn } from '../Sort/Items/Input/Input';
import TextArea from '../Sort/Items/Input/items/TextArea/TextArea';
import { reduxForm } from 'redux-form'
import InputDropDown from '../Sort/Items/Input/items/InputDropDown/InputDropDown'
import {InputDate} from '../Sort/Items/Date/InputDate'
import { CheckboxArea } from '../Sort/Items/Input/items/Checkdox/InputCheckbox'
import InputItem from '../Sort/Items/Input/items/InputItem'
import InputFile from '../Sort/Items/Input/items/File/InputFile'
import { createDisciplineNamesAPI } from '../../../API/DisciplineAPI'

const year = [
    { title: "5 семестр" },
    { title: "6 семестр" },
    { title: "7 семестр" },
    { title: "8 семестр" }
]

const SortForm = reduxForm({ form: 'sortLessons' })(Sort)
const InputForm = reduxForm({ form: 'inputDis' })(Input)
export class Lessons extends React.Component {

    componentDidMount() {
        this.props.getDisciplinesName();
        this.props.getSpec();
    }
    IsInRole(needRole) {
        debugger
        let roles = this.props.role;
        if ((Array.isArray(roles))) {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i] === needRole)
                    return true;
            }
            return false;
        } else {
            if (roles === needRole) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    submitInput = values => {
        debugger
        var err = validate(values)
        if(!err.Activ)
        {
            debugger
            createDisciplineNamesAPI(values);
        }
    }
    submit = values => {
        debugger;
       
    }
    render() {
        let AllLessons;
        this.props.nameofDiscoplines === undefined ? AllLessons = () => { return <Item /> } :
            this.props.nameofDiscoplines.length != 0 ?
                AllLessons = this.props.nameofDiscoplines.map((u) => { return <Item u={u} path="/lesson/" /> }) :
                AllLessons = () => { return <Item /> };

        let AllSpec;
        this.props.nameofDiscoplines === undefined ? AllSpec = () => { return <Dropdown /> } :
            this.props.nameOfSpec.length != 0 ?
                AllSpec = this.props.nameOfSpec.map((u) => { return <Dropdown name={u.name} link={year} title={u.name} /> }) :
                AllSpec = () => { return <Dropdown /> };
        
        return (
            <MainContentWrapper leftSideBar="true">
                <SortForm onSubmit={this.submit}>
                   
                        <InputForm title="Добавить дисциплину"  btnText="Добавить" onSubmit={this.submitInput}>
                            <TextArea title="Сокращенное название" size="1" name="name"/>
                            <TextArea title="Полное название" size="2" name="fullName"/>
                            <TextArea title="Всего часов по дисциплине" size="1" name="countHours"/>
                            <TextArea title="Всего лекций" size="1" name="countHoursLeck"/>
                            <TextArea title="Всего ПЗ" size="1" name="countHoursPZ"/>
                            <TextArea title="Всего ГЗ" size="1" name="countHoursGZ"/>
                            <TextArea title="Всего МЗ" size="1" name="countHoursMZ"/>
                            <TextArea title="Всего СРП" size="1" name="countHoursSWZ"/>
                            <TextArea title="Всего семинаров" size="1" name="countHoursSEM"/>
                            <TextArea title="Всего лабораторных работ" size="1" name="countHoursLR"/>
                            <TextArea title="Всего контрольных работ" size="1" name="countHoursСontrolWork"/>
                            <TextArea title="Всего зачетов" size="1" name="countHoursTest"/>
                            <TextArea title="Семестр" size="1" name="Semestr"/>
                            <TextArea title="Норма часов" size="1" name="countNorm"/>
                            <CheckboxArea title="Проводиться экзамен" size="1" name="isExam"/>
                            <InputDate title="Дата учебного плана" name="DateTo" />
                            <InputFile title="Выберите учебный план" name="Plan"/>
                            <InputDropDown title="Для специализации" link={this.props.nameOfSpec}  name="NameOfSpec"/>
                        </InputForm> 
                    {AllSpec}
                    <Filter />
                </SortForm>

                <div class="cards">
                    <div class="cards__content">
                        {AllLessons}
                    </div>
                </div>
            </MainContentWrapper>
        )
    }
}




