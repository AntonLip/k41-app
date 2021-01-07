import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { TableRow } from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'
import { Menu } from './Item/Menu/Menu'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'
import { reduxForm } from 'redux-form'
import SortItem from '../Sort/SortItem'

const TableOfPerson = (props) => {
    let allPerson;
    if (props.persons === undefined) {
        allPerson = <TableRow />
    }
    else {
        if (props.persons.length != 0) {
            allPerson = props.persons.map((u) => { return <TableRow u={u} IsOfficers={props.IsOfficers} /> });
        }
    }
    return (
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
    )
}

export class WHO extends React.Component {

    state = {
        profile: {}
    }

    componentDidMount() {
        debugger
        this.getData();

    }

    getData() {
        this.props.IsOfficers ? this.props.getUser() : this.props.getCadets()
        this.props.IsOfficers ? this.props.getUnits() : this.props.getGroups();
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
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
        debugger
        this.props.getFilteredPerson(values, this.props.IsOfficers);
    }

    render() {
        return (
            <MainContentWrapper leftSideBar="true">
                <SortItemForm onSubmit={this.submit}>
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
                </SortItemForm>
                <div class="who">
                    <div class="who__wrapper">
                        <div class="table who__table">
                            {this.props.IsOfficers ? <TableOfPerson persons={this.props.officers} IsOfficers={true} onClick={this.submit} /> : <TableOfPerson persons={this.props.cadets} IsOfficers={false} />}
                        </div>
                        <Profile info={this.state.profile} />
                    </div>
                </div>
            </MainContentWrapper>
        );
    }
}
const SortItemForm = reduxForm({ form: 'sortWho' })(SortItem)

