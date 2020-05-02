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



 

const Timetable = (props) => {
    
     let Lessons = props.dataLesson.map((l) =>
      { return <Lesson name={l.name} Auditore={l.Auditore} Lectural={l.Lectural}/>});
      debugger;
     let Grups = props.dataGroups.map((g) => 
     {return <Group name={g.name}/>});
    return (
        <div className={classes.TimetableClass}>
            <div className={classes.Groups}>
             {Grups} 
            </div>
            <div className={classes.TimetableEachGroup}>
             {Lessons}
            </div>
        </div>
    );
}

export default Timetable;