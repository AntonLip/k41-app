import React from 'react';

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Item from './Item/Item'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';
import Filter from '../Sort/Items/Filter/Filter'
import Date from '../Sort/Items/Date/DateQ';
import {reduxForm} from 'redux-form'
const podr = [
    { title: "413" },
    { title: "414" },
    { title: "415" },
]
const pred = [
    { title: "SAU" },
    { title: "OIT" },
    { title: "EPRET" },
]
const who = [
    { title: "Шарак" },
    { title: "Белоус" },
    { title: "Куренев" },
]




export class Timetable extends React.Component {

    componentDidMount() {
        this.props.getDisciplines();
        this.props.getPersons(); 
        this.props.getGroups();
        var fullDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " 00:00:00.0000000"
       if(this.props.isAuth)
       {                       
        this.IsInRole(this.props.role, "Cadet") ? this.getTimetablePerData(443, fullDate, true) : 
            this.IsInRole(this.props.role, "lectural") ? this.getTimetablePerData(this.props.family_name, fullDate, false) :     
                this.getTimetablePerDay(fullDate)
       }
       else{
        this.getTimetablePerDay(fullDate)
       }
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

    getTimetablePerData = (forWho, fullDate, isCadet) => {
        this.props.getTimetablePerData(forWho, fullDate, isCadet);
    }

    getTimetablePerDay = (date) => {
        this.props.getTimetablePerDay(date);
    }

    submit = values => {

    }

    render() {        
        let AllLessons
        this.props.timetable === undefined ? AllLessons = ()=>{return<Item />} :
             this.props.timetable.length !=0 ?  AllLessons = this.props.timetable.map((u) => { return <Item u={u} type={this.props.position}/> }) :
                 AllLessons = ()=>{return<Item />} ;
        return (
            <MainContentWrapper leftSideBar="true">
                <SortForm onSubmit={this.printInfo}>
                    <Dropdown title="Учебный взвод" link={podr} size="10" name="department"/>
                    <Dropdown title="Учебный предмет" link={pred} size="10" name="lesson"/>
                    <Dropdown title="Преподаватель" link={who} size="10" name="lector"/>
                    <Date title="С какой даты" name="dateFrom"/>
                    <Date title="По какую дату" name="dateTo"/>
                    <Filter />
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

const SortForm = reduxForm({form: 'sortTimetable'})(Sort)