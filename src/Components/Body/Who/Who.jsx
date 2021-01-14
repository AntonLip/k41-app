import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { TableRow } from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'
import { reduxForm } from 'redux-form'
import SortItem from '../Sort/SortItem'
import Clear from '../Sort/Items/Clear/Clear'
import { isEmpty } from '../../../help/help'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import WhoEdit from './WhoEdit/WhoEdit'

class TableOfPerson extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState({
            profile:{...this.props.persons[1]}
        })
    }

    state = {
        profile: {}
    }
    
    setActiveElement = (u) => {
        this.setState({
            profile: {...u}
        })
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
            { !isEmpty(this.state.profile) ? <Profile info={this.state.profile} IsOfficers={this.props.IsOfficers}/> : <div></div>}
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

    render() {
        return (
            <>
        <Route exact path={this.props.match.path}>
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
                    <Clear clear={this._getMainData.bind(this)} />
                </SortItemForm>

                <div class="who">
                    {this.props.IsOfficers ? <TableOfPerson persons={this.props.officers} IsOfficers={true} /> :
                        <TableOfPerson persons={this.props.cadets} IsOfficers={false} />}
                </div>

            </MainContentWrapper>
        </Route>
        <Route path={this.props.match.path + "/:id/edit"} render={()=>{return <WhoEdit pathBack={this.props.match.path}/>}}/>
        </>
        );
    }
}
const SortItemForm = reduxForm({ form: 'sortWho' })(SortItem)

export default compose(withRouter)(WHO)