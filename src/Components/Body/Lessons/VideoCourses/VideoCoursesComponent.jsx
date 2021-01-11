
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCousresNamesThunkCreator } from '../../../../Redux/video-courses-redusers';
import { VideoCourses } from './VideoCourses';
let maptoStateToProps = (state) => {
    return {
        videocourses: state.VideoCoursesReducers.nameofCorses
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getVideoCourses: () => {
            dispatch(getCousresNamesThunkCreator());
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(VideoCourses)