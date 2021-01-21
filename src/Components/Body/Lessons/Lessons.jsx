import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'

import {Input,validate, warn } from '../Sort/Items/Input/Input';
import TextArea from '../Sort/Items/Input/items/TextArea/TextArea';
import { reduxForm, reset } from 'redux-form'
import InputDropDown from '../Sort/Items/Input/items/InputDropDown/InputDropDown'
import {InputDate} from '../Sort/Items/Date/InputDate'
import { CheckboxArea } from '../Sort/Items/Input/items/Checkdox/InputCheckbox'
import InputItem from '../Sort/Items/Input/items/InputItem'
import { createDisciplineNamesAPI } from '../../../API/DisciplineAPI'
import Clear from '../Sort/Items/Clear/Clear'
import TextInput from '../Sort/Items/Input/items/TextInput/TextInput'

const year = [
    { title: "5 семестр" },
    { title: "6 семестр" },
    { title: "7 семестр" },
    { title: "8 семестр" }
]

const SortForm = reduxForm({ form: 'sortLessons' })(Sort)
const InputForm = reduxForm({ form: 'inputDis', onSubmitSuccess: (rezult, dispatch) => {dispatch(reset('inputDis'))}})(Input)
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
        var err = validate(values)
        if(!err.Activ)
        {            
            createDisciplineNamesAPI(values);
        }
    }
    submit = values => {
        debugger;
       console.log(values)
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
                AllSpec = this.props.nameOfSpec.map((u) => { return <Dropdown name={u.name} link={yearLink} title={u.name} /> }) :
                AllSpec = () => { return <Dropdown /> };
        
        return (
            <MainContentWrapper leftSideBar="true">
                <SortForm onSubmit={this.submit}>
                    <InputForm title="Добавить дисциплину"  btnText="Добавить" onSubmit={this.submitInput}>
                        <TextInput title="Сокращенное название" size="1" name="name"/>
                        <TextArea title="Полное название" size="2" name="fullName"/>
                        <TextInput title="Всего часов по дисциплине" size="1" name="countHours"/>
                        <TextInput title="Всего лекций" size="1" name="countHoursLeck"/>
                        <TextInput title="Всего ПЗ" size="1" name="countHoursPZ"/>
                        <TextInput title="Всего ГЗ" size="1" name="countHoursGZ"/>
                        <TextInput title="Всего МЗ" size="1" name="countHoursMZ"/>
                        <TextInput title="Всего СРП" size="1" name="countHoursSWZ"/>
                        <TextInput title="Всего семинаров" size="1" name="countHoursSEM"/>
                        <TextInput title="Всего лабораторных работ" size="1" name="countHoursLR"/>
                        <TextInput title="Всего контрольных работ" size="1" name="countHoursСontrolWork"/>
                        <TextInput title="Всего зачетов" size="1" name="countHoursTest"/>
                        <TextInput title="Семестр" size="1" name="Semester"/>
                        <TextInput title="Норма часов" size="1" name="countNorm"/>
                        <CheckboxArea title="Проводиться экзамен" size="1" name="isExam"/>
                        <InputDate title="Дата учебного плана" name="dateOfPlan" />                        
                        <InputDropDown title="Для специализации" link={this.props.nameOfSpec}  name="SpecializationDB"/>
                    </InputForm> 
                    {AllSpec}
                    <Filter />
                    <Clear clear={this.sort} />
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

const yearLink = [
    {name: "3 курс"},
    {name: "4 курс"},
    {name: "5 курс"},

]


