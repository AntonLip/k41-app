
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createLessonInDisciplineThunkCreator, getDisciplineLessonsThunkCreator } from '../../../../Redux/disciplines-reduser';
import { getLessonTypeThunkCreator } from '../../../../Redux/generalInfo-reduser';
import { Lesson } from './Lesson';
let maptoStateToProps = (state) => {
    return {
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        lessons : state.disciplinesReduser.DisciplinesPage.lessons,
        lessonType : state.generalInfoReduser.info.lessonType
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDiscipine: () => {
            dispatch();
        },
        getLessons:(id)=>{
            dispatch(getDisciplineLessonsThunkCreator(id));
        },
        addLesson: (id, values)=>{
            dispatch(createLessonInDisciplineThunkCreator(values));
        },
        getLessonType:()=>{
            dispatch(getLessonTypeThunkCreator());
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter
)(Lesson)