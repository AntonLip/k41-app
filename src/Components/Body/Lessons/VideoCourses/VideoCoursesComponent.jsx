
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDisciplineNamesThunkCreator } from '../../../../Redux/disciplines-reduser';
import { getCousresNamesThunkCreator } from '../../../../Redux/video-courses-redusers';
import { VideoCourses } from './VideoCourses';
let maptoStateToProps = (state) => {
    return {
        videocourses: state.VideoCoursesReducers.nameofCorses,
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getVideoCourses: () => {
            dispatch(getCousresNamesThunkCreator());
        },
        getDisciplinesName: () => {
            dispatch(getDisciplineNamesThunkCreator());
        },
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(VideoCourses)