const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'

let initState =
{
    users: [
        { id: 1, fullName: 'Anton', status: 'Im learning', Group: "433", followed: false },
        { id: 2, fullName: 'Dmitry', status: 'Im working', Group: "453", followed: false },
        { id: 3, fullName: 'Alex', status: 'Im silly', Group: "432", followed: true },
    ]
}




export const UserReduser = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
        case SET_USER:
            return { ...state, users: [...state.users , action.users] }
        default:
            return state;
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