import { getTimetableAPI } from "../API/TimetibleAPI";

const GET_TIMETABLE = 'GET_TIMETABLE'

let initialState = {
    timetablePage: {
        timetable:[]
    }
}

export const timetableReduser = (state = initialState, action) => {
  let copyState = {
        ...state
    }
    switch (action.type) {

        case GET_TIMETABLE:
            debugger;
            copyState.timetablePage.timetable = [...action.data];
            return copyState;
        default:
            return state;
    }
}

export const getTimetableThunkCreator = () => {
    return (dispatch) => {
        getTimetableAPI().then(data => {
            dispatch(setDataAC(data));
        });
    }
}
export const setDataAC = (data) => {
    return {
        type: GET_TIMETABLE,
        data
    }
}