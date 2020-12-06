import React from 'react';

import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Date from '../Sort/Items/Date/Date'
import Item from './Item/Item'

const podr = [
    { title: "443" },
    { title: "442" },
    { title: "445" },
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
        this.props.getUser();

    }

    getTT = (group, fullDate) => {

        this.props.getTimetable(group, fullDate);
    }


    render() {
        let allTT = this.props.timetable.map((u) => { return <Item u={u} delUser={this.props.deleteUser} role="lectural" /> });
        
        return (
            <div class="timetable">
                <Sort>
                    <Dropdown title="Учебный взвод" link={podr} size="10" />
                    <Dropdown title="Учебный предмет" link={pred} size="10" />
                    <Dropdown title="Преподаватель" link={who} size="10" />
                    <Date title="С какой даты" />
                    <Date title="По какую дату" />
                </Sort>
                <div class="timetable__wrapper">
                    {allTT === null ? <Item /> : allTT}
                    <Item />
                </div>
            </div>

        );
    }

}
