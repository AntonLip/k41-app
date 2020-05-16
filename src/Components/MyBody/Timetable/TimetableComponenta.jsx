import React from 'react';
import { addTimetableCreator, updateTimetableTextCreator } from '../../../Redux/timetable-reduser';
import Timetable from './Timetable';
import { connect } from 'react-redux';

export const TimetableComponenta = (props) => {
    debugger;

    let AddLesson = () => {
        props.dispatch(addTimetableCreator());
    };
    let ChangeLessonTexts = (newLesson) => {
        let Lesson = {
            id: 0,
            time: newLesson.newTime,
            name: newLesson.newName,
            Auditore: newLesson.newAuditore,
            Lectural: newLesson.newLectural,
            type: newLesson.newtype
        }
        props.dispatch(updateTimetableTextCreator(Lesson));
    };

    return (
        <Timetable dataGroups={props.dataPage.dataGroups} dataLessons={props.dataPage.dataLesson} newLesson={props.dataPage.newLesson}
            addLesson={AddLesson} changeLessonTexts={ChangeLessonTexts} />
    );
}

let maptoStateToProps = (state) => {
    return {
        dataGroups: state.dialogPage.dataGroups,
        dataLessons: state.dataPage.dataLesson,
        newLesson: state.dataPage.newLesson
    }
}
let mapDispatchToProps = (dispatch) => {
        return {
            ChangeLessonTexts: (newLesson) => {
                let Lesson = {
                    id: 0,
                    time: newLesson.newTime,
                    name: newLesson.newName,
                    Auditore: newLesson.newAuditore,
                    Lectural: newLesson.newLectural,
                    type: newLesson.newtype
                }
                dispatch(updateTimetableTextCreator(Lesson));
            },
            AddLesson: () => {
                dispatch(addTimetableCreator());
            }
        }
    }
const TimetibleContainer = connect(maptoStateToProps,mapDispatchToProps)(Timetable);

export default TimetibleContainer;