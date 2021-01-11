
import { getUserDataByFilter, deleteUserAPI, updateUserAPI, getofficersAPI } from './../API/api'
import { useDispatch } from 'react-redux'
import { deleteCadetsAPI, getCadetsAPI, getFilteredCadetsAPI } from '../API/CadetsAPI'

const DELETE_USER = 'DELETE_USER'
const SET_USER = 'SET_USER'
const SET_FILTERED_USER_DATA = 'SET_FILTERED_USER_DATA'
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
const DELETE_CADET = 'DELETE_CADET'
const SET_CADET = 'SET_CADET'
const SET_FILTERED_CADET_DATA = 'SET_FILTERED_CADET_DATA'
const UPDATE_CADET_DATA = 'UPDATE_CADET_DATA'

let initState =
{
    whosPage: {
        officers: [],
        cadets: []
    }
}

export const WHOsReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_USER:
            copyState.whosPage.officers = [...action.officers];
            return copyState;
        case SET_FILTERED_USER_DATA:
            copyState.whosPage.officers.length = 0;
            copyState.whosPage.officers = [...action.officers];
            return copyState;
        case DELETE_USER:
            debugger
            copyState.whosPage.officers = [...state.whosPage.officers]
            for (let i = 0; i < copyState.whosPage.officers.length; i++) {
                if (copyState.whosPage.officers[i].id === action.id) {
                    copyState.whosPage.officers.splice(i, 1);
                }
            }
            return copyState;
        case SET_CADET:
            debugger
            if (Array.isArray(action.data)) {
                copyState.whosPage.cadets = action.data;
            }
            else {
                copyState.whosPage.cadets = [...action.data];
            }
            return copyState;
        case SET_FILTERED_CADET_DATA:
            debugger
            if (Array.isArray(action.data)) {
                copyState.whosPage.cadets.length = 0;
                copyState.whosPage.cadets = [...action.data];
            }

            return copyState;
        case DELETE_CADET:
            debugger
            copyState.whosPage.cadets = [...state.whosPage.cadets]
            for (let i = 0; i < copyState.whosPage.officers.length; i++) {
                if (copyState.whosPage.cadets[i].id === action.id) {
                    copyState.whosPage.cadets.splice(i, 1);
                }
            }
            return copyState;

        default:
            return state;
    }
}

export const getofficersThunkCreator = (token) => {
    return (dispatch) => {
        getofficersAPI(token).then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setofficersAC(data));
            }
        });
    }
}

export const updateUserThunkCreator = (data) => {
    return (dispatch) => {
        updateUserAPI(data).then(data => {
            console.log("updateUserThunkCreator");
            console.log(data);
            if (data) {
                dispatch(updateDataAC(data));
            }
        });
    }
}

export const getFilteredofficersThunkCreator = (values) => {
    return (dispatch) => {
        getUserDataByFilter(values).then(data => {
            console.log("getFilteredofficersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setFilteredDataofficersAC(data));
            }
        });
    }
}

export const getFilteredCadetsThunkCreator = (values) => {
    return (dispatch) => {
        getFilteredCadetsAPI(values).then(data => {
            console.log("getFilteredCadets");
            console.log(data);
            if (data) {
                dispatch(setFilteredDataCadetsAC(data));
            }
        });
    }
}

export const deleteUserThunkCreator = (id) => {
    return (dispatch) => {
        deleteUserAPI(id).then(data => {
            if (data === id)
                dispatch(deleteUserAC(data));
        })
    }

}

export const deleteCadetsThunkCreator = (id) => {
    return (dispatch) => {
        deleteCadetsAPI(id).then(data => {
            if (data === id)
                dispatch(deleteCadetsAC(data));
        })
    }

}

export const getCadetsThunkCreator = () => {
    return (dispatch) => {
        getCadetsAPI().then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setCadetsAC(data));
            }
        });
    }
}

const setCadetsAC = (data) => {
    console.log('setCadetsAC');
    console.log(data);
    let action = { type: SET_CADET, data }
    return action;
}

const deleteCadetsAC = (id) => {
    console.log('deleteCadetsAC ' + id);
    let action = { type: DELETE_CADET, id }
    return action;
}

const setFilteredDataCadetsAC = (data) => {
    console.log('setFilteredDataCadetsAC');
    console.log(data);
    let action = { type: SET_FILTERED_CADET_DATA, data }
    return action;
}

const deleteUserAC = (id) => {
    console.log('deleteUserAC ' + id);
    let action = { type: DELETE_USER, id }
    return action;
}

const setofficersAC = (officers) => {
    console.log('setofficersAC');
    console.log(officers);
    let action = { type: SET_USER, officers }
    return action;
}

const setFilteredDataofficersAC = (officers) => {
    console.log('setFilteredDataofficersAC');
    console.log(officers);
    let action = { type: SET_FILTERED_USER_DATA, officers }
    return action;
}

const updateDataAC = (data) => {
    console.log('updateDataAC');
    console.log(data);
    let action = { type: UPDATE_USER_DATA, data }
    return action;
}