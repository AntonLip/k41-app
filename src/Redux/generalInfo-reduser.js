import { getAcademicDegreesAPI, getAcademicTitlesAPI, getGroupsAPI, getLecturalsNameAPI,  getMilitaryRanksAPI, getPositionAPI, getSpecAPI, getUnitAPI } from "../API/api";
import { getDisciplineNamesAPI, getLessonTypeAPI } from "../API/DisciplineAPI";
import { getWindowsStatusAPI } from "../API/windowsAPI";

const SET_MILITARY_RANK = 'SET_MILITARY_RANK'
const SET_ACAD_TITLE = 'SET_ACAD_TITLE'
const SET_ACAD_DEGREE = 'SET_ACAD_DEGREE'
const SET_POSITION = 'SET_POSITION'
const SET_GROUPS = 'SET_GROUPS'
const SET_DISCIPLINES = 'SET_DISCIPLINES'
const SET_LECTURAL = 'SET_LECTURAL'
const SET_UNITS = 'SET_UNITS'
const SET_SPEC = 'SET_SPEC'
const SET_LESSON_TYPE = 'SET_LESSON_TYPE'
const GET_WINDOWS_STATUS = 'GET_WINDOWS_STATUS'


let initState =
{
    info: {
        position: [],
        militaryRank: [],
        academicTitle: [],
        academicDegree: [],
        groups: [],
        units: [],
        lecturals: [],
        specializations: [],
        lessonType: [],
        openCloseWindow: []
    }
}

export const generalInfoReduser = (state = initState, action) => {
    if (action.data === undefined) {
        return state;
    }
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_POSITION:
            copyState.info.position = [...action.data];
            return copyState;
        case SET_LESSON_TYPE:
            debugger
            copyState.info.lessonType = [...action.data];
            return copyState;
        case SET_MILITARY_RANK:
            copyState.info.militaryRank = [...action.data];
            return copyState;
        case SET_ACAD_TITLE:
            copyState.info.academicTitle = [...action.data];
            return copyState;
        case SET_ACAD_DEGREE:
            copyState.info.academicDegree = [...action.data];
            return copyState;
        case SET_GROUPS:
            copyState.info.groups = [...action.data];
            return copyState;
        case SET_LECTURAL:
            copyState.info.lecturals = [...action.data];
            return copyState;
        case SET_UNITS:
            copyState.info.units = [...action.data];
            return copyState;
        case SET_SPEC:
            copyState.info.specializations = [...action.data];
            return copyState;
        case GET_WINDOWS_STATUS:
            copyState.info.openCloseWindow = [...action.data];
        default:
               return state;
    }
}

export const setPositionThunkCreator = (IsOfficers) => {
    return (dispatch) => {
        getPositionAPI(IsOfficers).then(data => {
            dispatch(setPositionAC(data));
        });
    }
}

export const setMilitaryRankThunkCreator = (IsOfficers) => {
    return (dispatch) => {
        getMilitaryRanksAPI(IsOfficers).then(data => {
            dispatch(setMilitaryRankAC(data));
        });
    }
}

export const setAcademicDegreeThunkCreator = () => {
    return (dispatch) => {
        getAcademicDegreesAPI().then(data => {
            dispatch(setAcadDegreeAC(data));
        });
    }
}

export const setAcademicTitleThunkCreator = () => {
    return (dispatch) => {
        getAcademicTitlesAPI().then(data => {
            dispatch(setAcadTitleAC(data));
        });
    }
}

export const setGroupsThunkCreator = () => {
    return (dispatch) => {
        getGroupsAPI().then(data => {
            dispatch(setGroupsAC(data));
        });
    }
}

export const setDisciplinesThunkCreator = () => {
    return (dispatch) => {
        getDisciplineNamesAPI().then(data => {
            dispatch(setDisciplinesAC(data));
        });
    }
}

export const setLecturalsThunkCreator = () => {
    return (dispatch) => {
        getLecturalsNameAPI().then(data => {
            dispatch(setLecturalsAC(data));
        });
    }
}

export const setUnitThunkCreator = () => {
    return (dispatch) => {
        getUnitAPI().then(data => {
            dispatch(setUnitAC(data));
        });
    }
}

export const setSpecThunkCreator = () => {
    return (dispatch) => {
        getSpecAPI().then(data => {
            dispatch(setSpecAC(data));
        });
    }
}

export const getWindowsStatusThunkCreator = () => {
    return (dispatch) => {
        getWindowsStatusAPI().then(data => {
            dispatch(getWindowsStatusAC(data));
        });
    }
}

export const getLessonTypeThunkCreator = () => {
    return (dispatch) => {
        getLessonTypeAPI().then(data => {
            dispatch(setLessonTypeAC(data));
        });
    }
}

const setPositionAC = (data) => {
    return {
        type: SET_POSITION,
        data
    }
}

const setMilitaryRankAC = (data) => {
    return {
        type: SET_MILITARY_RANK,
        data
    }
}

const setAcadDegreeAC = (data) => {
    return {
        type: SET_ACAD_DEGREE,
        data
    }
}
const setAcadTitleAC = (data) => {
    return {
        type: SET_ACAD_TITLE,
        data
    }
}

const setGroupsAC = (data) => {
    return {
        type: SET_GROUPS,
        data
    }
}

const setLessonTypeAC = (data) => {
    return {
        type: SET_LESSON_TYPE,
        data
    }
}

const setDisciplinesAC = (data) => {
    return {
        type: SET_DISCIPLINES,
        data
    }
}
const setLecturalsAC = (data) => {
    return {
        type: SET_LECTURAL,
        data
    }
}
const setUnitAC = (data) => {
    return {
        type: SET_UNITS,
        data
    }
}
const setSpecAC = (data) => {
    return {
        type: SET_SPEC,
        data
    }
}
const getWindowsStatusAC = (data) => {
    return {
        type: GET_WINDOWS_STATUS,
        data
    }
}
