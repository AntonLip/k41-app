import React from 'react';

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Item from './Item/Item'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';
import Filter from '../Sort/Items/Filter/Filter'
import DateQ from '../Sort/Items/Date/DateQ';

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
                <Sort>
                    <Dropdown title="Учебный взвод" link={this.props.groups} size="10" />
                    <Dropdown title="Учебный предмет" link={this.props.disciplines} size="10" />
                    <Dropdown title="Преподаватель" link={this.props.lecturals} size="10" />
                    <DateQ title="С какой даты" />
                    <DateQ title="По какую дату" />
                    <Filter/>
                </Sort>
                <div class="timetable">
                    <div class="timetable__wrapper">
                        {AllLessons}
                    </div>
                </div>
            </MainContentWrapper>
        );
    }

}
