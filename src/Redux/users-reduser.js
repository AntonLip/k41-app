
import { getUserDataByFilter, getUsersAPI } from './../API/api.js'
import { useDispatch } from 'react-redux'

const SET_USER = 'SET_USER'
const SET_FILTERED_USER_DATA = 'SET_FILTERED_USER_DATA'
let initState =
{
    usersPage: {
        users: []
    }
}
export const UserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_USER:
            copyState.usersPage.users = [...action.users];
            return copyState;
        case SET_FILTERED_USER_DATA:
            copyState.usersPage.users.length = 0;
            copyState.usersPage.users = [...action.users];
        default:
            return state;
    }
}
export const getUsersThunkCreator = () => {
    return (dispatch) => {
        getUsersAPI().then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setUsersAC(data));
            }
        });
    }
}
export const getFilteredUsersThunkCreator = (filter) => {
    return (dispatch) => {
        getUserDataByFilter(filter).then(data => {
            console.log("getFilteredUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setFilteredDataUsersAC(data));
            }
        });
    }
}
const setUsersAC = (users) => {
    console.log('setUsersAC');
    console.log(users);
    let action = { type: SET_USER, users }
    return action;
}
const setFilteredDataUsersAC = (users) => {
    console.log('setFilteredDataUsersAC');
    console.log(users);
    let action = { type: SET_FILTERED_USER_DATA, users }
    return action;
}