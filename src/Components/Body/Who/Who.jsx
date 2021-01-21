import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { TableRow } from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'
import { reduxForm } from 'redux-form'
import SortItem from '../Sort/SortItem'
import Clear from '../Sort/Items/Clear/Clear'
import InputFile from '../Sort/Items/Input/items/File/InputFile'
import InputDropDown from '../Sort/Items/Input/items/InputDropDown/InputDropDown'
import { InputDate } from '../Sort/Items/Date/InputDate'
import { CheckboxArea } from '../Sort/Items/Input/items/Checkdox/InputCheckbox'

import { Input, validate, warn } from '../Sort/Items/Input/Input';
import TextArea from '../Sort/Items/Input/items/TextArea/TextArea';
import { deleteCadetsThunkCreator } from '../../../Redux/whos-reduser'


import { isEmpty } from '../../../help/help'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import WhoEdit from './WhoEdit/WhoEdit'


const InputForm = reduxForm({ form: 'inputWho' })(Input)

class TableOfPerson extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState({
            profile: { ...this.props.persons[1] }
        })
    }

    state = {
        profile: {}
    }

    setActiveElement = (u) => {
        this.setState({
            profile: { ...u }
        })
    }
    deletePerson = (id) => {
        debugger
    }
    render() {
        let allPerson;
        if (this.props.persons === undefined) {
            allPerson = <TableRow />
        }
        else {
            if (this.props.persons.length != 0) {
                allPerson = this.props.persons.map((u) => { return <TableRow u={u} IsOfficers={this.props.IsOfficers} setActiveElement={this.setActiveElement} /> });
            }
        }
        return (
            <div class={!isEmpty(this.state.profile) ? "who__wrapper" : null}>

                <div class="table who__table">
                    <div class="table__wrapper">
                        <table>
                            <tr>
                                <th>Рег<br></br>номер</th>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчетсво</th>
                                <th>Должность</th>
                                <th>В/звание</th>
                                <th>Подразделение</th>
                            </tr>
                            {allPerson}
                        </table>
                    </div>
                </div>
                {!isEmpty(this.state.profile) ? <Profile info={this.state.profile} IsOfficers={this.props.IsOfficers}
                    delete={this.deletePerson.bind(this.state.profile.id)} /> : null}

            </div>

        )
    }
}

class WHO extends React.Component {

    componentDidMount() {
        this._getMainData();
        this._getSecondaryData();
    }

    _getMainData() {
        this.props.IsOfficers ? this.props.getUser() : this.props.getCadets()
        this.props.IsOfficers ? this.props.getUnits() : this.props.getGroups();

    }
    _getSecondaryData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
        this.props.getSpec();
    }
    IsInRole(role, needRole) {
        if ((Array.isArray(role))) {
            for (let i = 0; i < role.length; i++) {
                if (role[i] === needRole)
                    return true;
            }
            return false;
        } else {
            if (role === needRole) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    submit = (values) => {
        this.props.getFilteredPerson(values, this.props.IsOfficers);
    }
    submitInput = values => {
        debugger
        let person = {}
        person.info = null
        person.militaryRank = values.militaryRank
        person.position = values.position
        person.firstName = values.firstName
        person.middleName = values.middleName
        person.lastName = values.lastName
        person.birthDay = values.birthDay
        person.dateOfStartService = values.dateOfStartService
        this.props.IsOfficers ? person.nameOFVoinkom = values.nameOFVoinkom : person.groupName = values.groupName
        this.props.IsOfficers ? person.unit = values.unit : person.groupNumber = values.groupNumber
        if (this.props.IsOfficers) {
            person.serialAndNumderMilitaryDocs = values.serialAndNumderMilitaryDocs
            person.serialAndNumderCivilyDocs = values.serialAndNumderCivilyDocs
            person.whoGetPassport = values.whoGetPassport
            person.dateOfIssue = values.dateOfIssue
            person.dateOfExpiry = values.dateOfExpiry
            person.isMarried = values.isMarried
            person.FormSec = Number(values.FormSec)
            person.isMarried = values.isMarried
            person.info = values.info
        }
        person.info = values.info
        person.pathPhotoBig = "null"
        person.pathPhotoSmall = "null"
        this.props.createPerson(person, this.props.IsOfficers);
    }
    render() {
        return (
            <>
                <Route exact path={this.props.match.path}>
                    <MainContentWrapper leftSideBar="true">
                        <SortItemForm onSubmit={this.submit}>

                            <InputForm title="Добавить" btnText="Добавить" onSubmit={this.submitInput}>

                                <InputDropDown title="Воинское звание" link={this.props.militaryRank} name="militaryRank" />
                                <InputDropDown title="Должность" link={this.props.position} name="position" />

                                <TextArea title="Имя" size="1" name="firstName" />
                                <TextArea title="Отчество" size="1" name="middleName" />
                                <TextArea title="Фамилия" size="1" name="lastName" />

                                <InputDate title="Дата рождения" name="birthDay" />
                                <InputDate title="Дата призыва" name="dateOfStartService" />
                                {this.props.IsOfficers ?
                                    <TextArea title="Кем призван" name="nameOFVoinkom" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <TextArea title="Серия и номер удостоверения" name="serialAndNumderMilitaryDocs" /> : <div></div>}
                                {this.props.IsOfficers ? <div></div> :
                                    <InputDropDown title="Специализация" link={this.props.nameOfSpec} name="groupName" />}
                                {this.props.IsOfficers ?
                                    <InputDropDown title="Подразделение" link={this.props.units} name="unit" /> :
                                    <InputDropDown title="Номер группы" link={this.props.groups} name="groupNumber" />}
                                {this.props.IsOfficers ?
                                    <InputDropDown title="Научное звание" link={this.props.academicTitle} name="academicTitle" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <InputDropDown title="Научная степень" link={this.props.academicDegree} name="academicDegree" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <TextArea title="Паспорт (серия и номер)" size="1" name="serialAndNumderCivilyDocs" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <TextArea title="Кем выдан" size="1" name="whoGetPassport" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <InputDate title="Дата выдачи" name="dateOfIssue" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <InputDate title="Действителен до" name="dateOfExpiry" /> : <div></div>}

                                {this.props.IsOfficers ?
                                    <TextArea title="Форма" size="1" name="FormSec" /> : <div></div>}
                                {this.props.IsOfficers ?
                                    <InputDate title="Дата окончания формы" name="DateFormSec" /> : <div></div>}

                                <InputFile title="Фото" name="pathPhotoSmall" />
                                <CheckboxArea title="Женат (замужем)" size="1" name="isMarried" />

                                <TextArea title="Информация" size="3" name="info" />
                            </InputForm>
                            <Dropdown title="Звание" name="militaryRank" link={this.props.militaryRank} />
                            {this.props.IsOfficers ?
                                <Dropdown title="Подразделение" name="unit" link={this.props.units} /> :
                                <Dropdown title="Номер группы" name="GroupNumber" link={this.props.groups} />
                            }

                            <Dropdown title="Должность" name="position" link={this.props.position} />

                            {this.props.IsOfficers ?
                                <Dropdown title="Научное звание" name="academicTitle" link={this.props.academicTitle} /> : <div></div>
                            }
                            {this.props.IsOfficers ?
                                <Dropdown title="Научная степень" name="academicDegree" link={this.props.academicDegree} /> : <div></div>
                            }
                            <Filter />
                            <Clear clear={this._getMainData.bind(this)} />
                        </SortItemForm>

                        <div class="who">
                            {this.props.IsOfficers ? <TableOfPerson persons={this.props.officers} IsOfficers={true} delete={this.props.deletePerson} /> :
                                <TableOfPerson persons={this.props.cadets} IsOfficers={false} delete={this.props.deletePerson} />}
                        </div>

                    </MainContentWrapper>
                </Route>

            </>
        );
    }
}
const SortItemForm = reduxForm({ form: 'sortWho' })(SortItem)

export default compose(withRouter)(WHO)