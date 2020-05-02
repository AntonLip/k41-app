import React from 'react';
import classes from './Timetable.module.css'
import { NavLink } from 'react-router-dom';


const Lesson = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.Auditore}</div>
            <div>{props.Lectural}</div>
        </div>
    );
}
const Group = (props) => {
    let path = "Timetable/" + props.name;
    return (
        <div className={classes.Group}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


let LessonData = [{ name: "УЭСПД", Auditore: "239", Lectural: "Liplianin" },
                    { name: "ФК", Auditore: "213", Lectural: "Sidorov" },
                    { name: "Д444", Auditore: "239", Lectural: "Palchev" }
                ];

 let lessons = LessonData.map((l) => { return <Lesson name={l.name} Auditore={l.Auditore} Lectural={l.Lectural}/>});

const Timetable = (props) => {

    return (
        <div className={classes.TimetableClass}>
            <div className={classes.Groups}>
                <Group name="442" />
                <Group name="442" />
                <Group name="453" />
            </div>
            <div className={classes.TimetableEachGroup}>
                {lessons}
            </div>
        </div>
    );
}

export default Timetable;