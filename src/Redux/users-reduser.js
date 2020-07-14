
 import {getUsersAPI} from './../API/api.js'
import { useDispatch } from 'react-redux'

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'

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
        case FOLLOW:
            copyState.usersPage.users = [
                ...state.usersPage.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    } else {
                        return u;
                    }
                })
            ]
            return copyState;

        case UN_FOLLOW:
            debugger;
            copyState.usersPage.users = [
                ...state.usersPage.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    } else {
                        return u;
                    }
                })
            ]
            return copyState;

        case SET_USER:
            debugger;
            copyState.usersPage.users = [...action.users];
            return copyState;
            //return { ...state, users: [...state.users, action.users] }
        default:
            return state;
    }

}

export const getUsersThunkCreator = () =>{
    return (dispatch) => {
        getUsersAPI().then(data => {
            dispatch(setUsersAC(data));
    });
}

}

export const followAC = (userid) => {
    let action = { type: FOLLOW, userid }
    return action;
}


export const unfollowAC = (userid) => {

    let action = { type: UN_FOLLOW, userid }
    return action;
}

export const setUsersAC = (users) => {
    let action = { type: SET_USER, users }
    return action;
}