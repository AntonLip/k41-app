import { getAcademicDegreesAPI, getAcademicTitlesAPI, getGroupsAPI, getLecturalsNameAPI, getMilitaryRanksAPI, getPositionAPI, getUnitAPI} from "../API/api";
import { getDisciplineNamesAPI } from "../API/DisciplineAPI";

const SET_MILITARY_RANK = 'SET_MILITARY_RANK'
const SET_ACAD_TITLE = 'SET_ACAD_TITLE'
const SET_ACAD_DEGREE = 'SET_ACAD_DEGREE'
const SET_POSITION = 'SET_POSITION'
const SET_GROUPS = 'SET_GROUPS'
const SET_DISCIPLINES = 'SET_DISCIPLINES'
const SET_LECTURAL = 'SET_LECTURAL'
const SET_UNITS = 'SET_UNITS'


let initState =
{
    info: {
        position: [],
        militaryRank: [],
        academicTitle: [],
        academicDegree: [],
        groups: [],
        units: [],
        disciplines: [],
        lecturals: [],
    }
}

export const generalInfoReduser = (state = initState, action) => {
    if(action.data === undefined)
    {
        return state;
    }
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_POSITION:
            copyState.info.position = [...action.data];
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
        case SET_DISCIPLINES:
            copyState.info.disciplines = [...action.data];
            return copyState;
        case SET_LECTURAL:
            copyState.info.lecturals = [...action.data];
            return copyState;
        case SET_UNITS:
            copyState.info.units = [...action.data];
            return copyState;
        default:
            return state;
    }
}

export const setPositionThunkCreator = () => {
    return (dispatch) => {
        getPositionAPI().then(data => {
            dispatch(setPositionAC(data));
        });
    }
}

export const setMilitaryRankThunkCreator = () => {
    return (dispatch) => {
        getMilitaryRanksAPI().then(data => {
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