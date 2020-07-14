import { createStore, combineReducers, applyMiddleware } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import {UserReduser} from './users-reduser'
import {ProfileReduser} from './profile-reduser'
import {AuthUserReduser} from './auth-reduser'
import thunkMiddleware from 'redux-thunk'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    UserReduser,
    ProfileReduser,
    AuthUserReduser
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;