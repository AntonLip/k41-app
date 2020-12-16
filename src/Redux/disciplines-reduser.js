import { getDisciplineByIdAPI, getDisciplineNamesAPI } from "../API/DisciplineAPI"

const GET_DISCIPLINES_NAME = 'GET_DISCIPLINES_NAME'
const GET_DISCIPLINE = 'GET_DISCIPLINE'


let initState =
{
    DisciplinesPage: {
        nameofDiscoplines: [],
        discipline: []
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
