import React from 'react';

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Date from '../Sort/Items/Date/Date'
import Item from './Item/Item'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';
import Filter from '../Sort/Items/Filter/Filter'
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
        // this.props.getUser();
        // var day = new Date().getDay();
        // var month = new Date().getMonth();
        // var year = new Date().getFullYear();
        // var fullDate = year + "-" + month + "-" + day + " 00:00:00.0000000"
        // this.props.getTimetable(this.props.currGroup, fullDate);
    }

    getTT = (group, fullDate) => {

        this.props.getTimetable(group, fullDate);
    }

    submit = values => {

    }
    render() {
        let AllLessons
        this.props.timetable === undefined ? AllLessons = ()=>{return<Item />} : this.props.timetable.lenght !=0 ? AllLessons = ()=>{return<Item />} : AllLessons = this.props.timetable.map((u) => { return <Item u={u} /> });
        return (
            <MainContentWrapper leftSideBar="true">
                <Sort>
                    <Dropdown title="Учебный взвод" link={podr} size="10" />
                    <Dropdown title="Учебный предмет" link={pred} size="10" />
                    <Dropdown title="Преподаватель" link={who} size="10" />
                    <Date title="С какой даты" />
                    <Date title="По какую дату" />
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
