import { createStore, combineReducers, applyMiddleware } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import {UserReduser} from './users-reduser'
import {ProfileReduser} from './profile-reduser'
import {AuthUserReduser} from './auth-reduser'
import thunkMiddleware from 'redux-thunk'
import {LoginReduser} from './login-reduser'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    UserReduser,
    ProfileReduser,
    AuthUserReduser,
    LoginReduser
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;