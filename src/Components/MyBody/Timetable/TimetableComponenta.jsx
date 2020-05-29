import React from 'react';
import { addTimetableCreator, updateTimetableTextCreator } from '../../../Redux/timetable-reduser';
import Timetable from './Timetable';
import { connect } from 'react-redux';
import StoreContext from '../../../StoreContext';

export const TimetableComponenta = (props) => {

    return (<StoreContext.Consumer>{
                (store) => {
                    let state = store.getState();
                    let AddLesson = () => {
                        store.dispatch(addTimetableCreator());
                    };
                    let ChangeLessonTexts = (newLesson) => {
                        let Lesson = {
                            id: 0,
                            time: newLesson.newTime,
                            name: newLesson.newName,
                            Auditore: newLesson.newAuditore,
                            Lectural: newLesson.newLectural,
                            type: newLesson.newtype
                        };
                        store.dispatch(updateTimetableTextCreator(Lesson));
                    };
                    debugger;
                    return <Timetable dataGroups={state.timetableReduser.timetablePage.dataGroups} dataLessons={state.timetableReduser.timetablePage.dataLesson} 
                                      newLesson={state.timetableReduser.timetablePage.newLesson}
                                      addLesson={AddLesson} changeLessonTexts={ChangeLessonTexts} />;
                }
            }
        </StoreContext.Consumer>
    );
}

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
            debugger;
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
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;