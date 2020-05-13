import React from 'react';
import classes from './Timetable.module.css'
import { NavLink } from 'react-router-dom';
import { addTimetableCreator, updateTimetableTextCreator } from '../../../Redux/timetable-reduser';


const Lesson = (props) => {
    return (
        <div className={classes.lesson}>
            <div className={classes.LessonNumber}>{props.time}</div>
            <div className={classes.LessonOtherInfo}>
                <div>{props.name}:</div>

                <div>{props.Auditore}</div>
            </div>
            <div>
                <div>{props.type}</div>

                <div>{props.Lectural}</div>
            </div>
        </div>
    );
}
const Group = (props) => {
    let path = "/" + props.name;
    return (
        <div className={classes.Group}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}





const Timetable = (props) => {
    let newTime = React.createRef();
    let newName = React.createRef();
    let newAuditore = React.createRef();
    let newLectural = React.createRef();
    let newtype = React.createRef();
    debugger;
    let Lessons = props.dataPage.dataLesson.map((l) => {
        return <Lesson id={l.id} time={l.time} name={l.name} Auditore={l.Auditore} Lectural={l.Lectural} type={l.type} />
    });
    let Grups = props.dataPage.dataGroups.map((g) => { return <Group name={g.name} /> });

    let clickCallback = () => {
        props.dispatch(addTimetableCreator());
    };
    let onChangeCallBack = () =>{
        let newLesson = {
            id: 0,
            time : newTime.current.value,
            name : newName.current.value,
            Auditore : newAuditore.current.value,
            Lectural : newLectural.current.value,
            type : newtype.current.value
        }
        props.dispatch(updateTimetableTextCreator(newLesson));

    };
    
    return (
        <div>
            <div>
                <form>
                    <input onChange={onChangeCallBack} ref={newTime} value={props.dataPage.newLesson.time}/>
                    <input onChange={onChangeCallBack} ref={newName}  value={props.dataPage.newLesson.name}/>
                    <input onChange={onChangeCallBack} ref={newAuditore}  value={props.dataPage.newLesson.Auditore}/>
                    <input onChange={onChangeCallBack} ref={newLectural}  value={props.dataPage.newLesson.Lectural}/>
                    <input onChange={onChangeCallBack} ref={newtype}  value={props.dataPage.newLesson.type}/>
                    <button onClick={clickCallback}>Enter changes</button>
                </form>
            </div>
            <div className={classes.TimetableClass}>
                <div className={classes.Groups}>
                    {Grups}
                </div>
                <div className={classes.TimetableEachGroup}>
                    {Lessons}
                </div>
            </div>
        </div>

    );
}

export default Timetable;