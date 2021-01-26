
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getDisciplineLessonsThunkCreator } from '../../../../Redux/disciplines-reduser';
import { Lesson } from './Lesson';
let maptoStateToProps = (state) => {
    return {
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        lessons : state.disciplinesReduser.DisciplinesPage.lessons
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDiscipine: () => {
            dispatch();
        },
        getLessons:(id)=>{
            dispatch(getDisciplineLessonsThunkCreator(id));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter
)(Lesson)