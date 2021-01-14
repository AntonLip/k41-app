
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getVideoCourseThunkCreator } from '../../../../../Redux/video-courses-redusers';
import { VideoCourse } from './VideoCourse';
let maptoStateToProps = (state) => {
    return {
        VideoCourse: state.VideoCoursesReducers.VideoCouse,
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getVideoCourse: (id) => {
            dispatch(getVideoCourseThunkCreator(id));
        }
    }
}
let WithURL = withRouter(VideoCourse);
export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(WithURL)