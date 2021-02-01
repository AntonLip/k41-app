import { createLessonInDisciplineAPI, getAllLessonsinDisciplines, getDisciplineByIdAPI, getDisciplineNamesAPI,getFilteredDisciplineNamesAPI } from "../API/DisciplineAPI"

const GET_DISCIPLINES_NAME = 'GET_DISCIPLINES_NAME'
const GET_DISCIPLINE = 'GET_DISCIPLINE'
const GET_DISCIPLINE_LESSONS = 'GET_DISCIPLINE_LESSONS'
const ADD_DISCIPLINE_LESSONS = 'ADD_DISCIPLINE_LESSONS'


let initState =
{
    DisciplinesPage: {
        nameofDiscoplines: [],
        discipline: [],
        lessons: []
    }
}

export const disciplinesReduser = (state = initState, action) => {
    if (action.data === undefined) {
        return state;
    }
    let copyState = {
        ...state
    }
    switch (action.type) {
        case GET_DISCIPLINES_NAME:
            copyState.DisciplinesPage.nameofDiscoplines = [...action.data];
            return copyState;
        case GET_DISCIPLINE:
            copyState.DisciplinesPage.discipline = [...action.data];
            return copyState;
        case GET_DISCIPLINE_LESSONS:
            copyState.DisciplinesPage.lessons = [...action.data];
            return copyState;
        case ADD_DISCIPLINE_LESSONS:
            debugger
            copyState.DisciplinesPage.lessons[copyState.DisciplinesPage.lessons.length] = action.data;
            return copyState;
        default:
            return state;
    }
}
export const getDisciplineNamesThunkCreator = () => {
    return (dispatch) => {
        getDisciplineNamesAPI().then(data => {
            dispatch(setDisciplinesNameAC(data));
        });
    }
}

export const getDisciplineThunkCreator = (id) => {
    return (dispatch) => {
        getDisciplineByIdAPI(id).then(data => {
            dispatch(setDisciplineAC(data));
        });
    }
}

export const getDisciplineLessonsThunkCreator = (id) => {
    return (dispatch) => {
        getAllLessonsinDisciplines(id).then(data => {
            dispatch(setLessonsAC(data));
        });
    }
}

export const getFilteredDisciplinesThunkCreator = (specName, year) => {
    return (dispatch) => {
        getFilteredDisciplineNamesAPI(specName, year).then(data => {
            dispatch(setDisciplinesNameAC(data));
        });
    }
}
export const createLessonInDisciplineThunkCreator = (values) => {
    return (dispatch) => {
        
        createLessonInDisciplineAPI(values).then(data => {
            dispatch(addLessonsAC(data));
        });
    }
}

const setDisciplinesNameAC = (data) => {
    return {
        type: GET_DISCIPLINES_NAME,
        data
    }
}

const setDisciplineAC = (data) => {
    return {
        type: GET_DISCIPLINE,
        data
    }
}

const setLessonsAC = (data) => {
    return {
        type: GET_DISCIPLINE_LESSONS,
        data
    }
}

const addLessonsAC = (data) => {
    return {
        type: ADD_DISCIPLINE_LESSONS,
        data
    }
}