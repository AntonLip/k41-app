import reducers from "video-react/lib/reducers"
import { getVideoCourseAPI, getVideoCoursesNamesAPI } from "../API/VideoCourse"

const GET_COURSES_NAME = 'GET_COURSES_NAME'
const GET_VIDEO_COURSE = 'GET_VIDEO_COURSE'


let initState =
{

    nameofCorses: [],
    countOfCourse: 0,
    VideoCouse: []

}

export const VideoCoursesReducers = (state = initState, action) => {
    if (action.data === undefined) {
        return state;
    }
    let copyState = {
        ...state
    }
    switch (action.type) {
        case GET_COURSES_NAME:
            copyState.nameofCorses = [...action.data.videoCourses];
            copyState.countOfCourse = action.data.countCourse;
            return copyState;
        case GET_VIDEO_COURSE:
            copyState.VideoCouse = [...action.data];
            return copyState;

        default:
            return state;
    }
}
export const getCousresNamesThunkCreator = () => {
    return (dispatch) => {
        getVideoCoursesNamesAPI().then(data => {
            dispatch(setCoursesNameAC(data));
        });
    }
}

export const getVideoCourseThunkCreator = (id) => {
    return (dispatch) => {
        getVideoCourseAPI(id).then(data => {
            dispatch(setVideoCoursesAC(data));
        });
    }
}

const setCoursesNameAC = (data) => {
    return {
        type: GET_COURSES_NAME,
        data
    }
}

const setVideoCoursesAC = (data) => {
    return {
        type: GET_VIDEO_COURSE,
        data
    }
}
