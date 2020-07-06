
const GET_TIMETABLE = 'GET_TIMETABLE'

let initialState = {
    timetablePage: []
}

export const timetableReduser = (state = initialState, action) => {

    let copyState = {
        ...state
    }
    switch (action.type) {

        case GET_TIMETABLE:
            copyState.timetablePage = [...action.data];
            if (action.data.lenght != 0) {
                for (let i = 0; i < action.data.lenght; i++) {
                    copyState.timetablePage[i] = {...action.data[i]}
                }
            }

            return copyState;
        default:
            return state;
    }
}

export const addTimetableCreator = () => {
    return {
        type: 'ADD'
    }
}

export const updateTimetableTextCreator = (newLesson) => {
    return {
        type: 'UPDATE-NEW-LESSON',
        newLesson
    }
}

export const setDataAC = (data) => {
    return {
        type: GET_TIMETABLE,
        data
    }
}