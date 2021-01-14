import React from 'react';

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Item from './Item/Item'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';
import Filter from '../Sort/Items/Filter/Filter'
import DateQ from '../Sort/Items/Date/DateQ';
import { reduxForm } from 'redux-form'
import Clear from '../Sort/Items/Clear/Clear'

export class Timetable extends React.Component {

    componentDidMount() {
        this.props.getDisciplines();
        this.props.getPersons();
        this.props.getGroups();
        this.getTimetable();
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
    getTimetable = () => {
        var fullDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " 00:00:00.0000000"
        if (this.props.isAuth) {
            this.IsInRole(this.props.role, "Cadet") ? this.props.getTimetablePerData(443, fullDate, true) :
                this.IsInRole(this.props.role, "lectural") ? this.props.getTimetablePerData(this.props.family_name, fullDate, false) :
                    this.props.getTimetablePerDay(fullDate)
        }
        else {
            this.props.getTimetablePerDay(fullDate)
        }
    }
    submit = values => {
        debugger;
        let dataStart, dataStop;
        values.dateFrom === undefined ? dataStart = '1991-10-11' : dataStart = values.dateFrom;
        values.dateTo === undefined ? dataStop = '1991-10-11' : dataStop = values.dateTo;
        this.props.getFilteredTimetable(values.lector, values.lesson, values.department, dataStart, dataStop);
    }
    render() {
        console.log(this.props.timetable)
        let AllLessons
        this.props.timetable === undefined ? AllLessons = () => { return <Item /> } :
            this.props.timetable.length != 0 ? AllLessons = this.props.timetable.map((u) => { return <Item u={u} type={this.props.position} /> }) :
                AllLessons = () => { return <Item /> };
        return (
            <MainContentWrapper leftSideBar={true}>
                <SortForm onSubmit={this.submit}>
                    <Dropdown title="Учебный взвод" link={this.props.groups} size="10" name="department" />
                    <Dropdown title="Учебный предмет" link={this.props.disciplines} size="10" name="lesson" />
                    <Dropdown title="Преподаватель" link={this.props.lecturals} size="10" name="lector" />
                    <DateQ title="С какой даты" name="dateFrom" />
                    <DateQ title="По какую дату" name="dateTo" />
                    <Filter />
                    <Clear clear={this.getTimetable.bind(this)} />
                    
                </SortForm>
                <div class="timetable">
                    <div class="timetable__wrapper">
                        {AllLessons}
                    </div>
                </div>
            </MainContentWrapper>
        );
    }
}

const SortForm = reduxForm({ form: 'sortTimetable' })(Sort)
