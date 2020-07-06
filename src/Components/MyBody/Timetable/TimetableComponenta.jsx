import React from 'react';
import { addTimetableCreator, updateTimetableTextCreator, setDataAC } from '../../../Redux/timetable-reduser';
import Timetable from './Timetable';
import { connect } from 'react-redux';


let maptoStateToProps = (state) => {
    return {
        dataGroups: state.timetableReduser.timetablePage.dataGroups,
        dataLessons: state.timetableReduser.timetablePage.dataLesson,
        newLesson: state.timetableReduser.timetablePage.newLesson
    }
}
let mapDispatchToProps = (dispatch) => {
    return {        
        ChangeLessonTexts: (newLesson) => {
           dispatch(updateTimetableTextCreator(newLesson));
        },
        AddLesson: () => {
            dispatch(addTimetableCreator());
        },
        setData:(dataLesson, dataGroups)=>{
            dispatch(setDataAC(dataLesson, dataGroups));
        }
    }
}
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;