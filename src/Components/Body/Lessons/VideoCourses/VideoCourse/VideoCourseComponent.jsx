
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getVideoCourseThunkCreator } from '../../../../../Redux/video-courses-redusers';
import { VideoCourse } from './VideoCourse';
let maptoStateToProps = (state) => {
    return {
        VideoCourse: state.VideoCoursesReducers.VideoCouse
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getVideoCourse: (id) => {
            dispatch(getVideoCourseThunkCreator(id));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(VideoCourse)