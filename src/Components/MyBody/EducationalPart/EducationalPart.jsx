import React from 'react'
import * as axios from 'axios'
import classes from './EducationalPart.module.css'
import { NavLink} from 'react-router-dom';
export class EducationPart extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <div className={classes.grid_container}>
                <div className={classes.MyNav}>
                    <div>
                        <NavLink to="/Timetable/" className={classes.item}>Расписание занятий</NavLink>
                    </div>
                    <div>
                        <NavLink to="/Users" className={classes.item}>Дисциплины кафедры</NavLink>
                    </div>
                </div>
            </div>);
    }
}

