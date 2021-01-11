import { createStore, combineReducers, applyMiddleware } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import thunkMiddleware from 'redux-thunk'
import {LoginReduser} from './login-reduser'
import {updateUserReduser} from './updateuser-reduser.js'
import {reducer as formReducer} from 'redux-form'
import {WHOsReduser} from './whos-reduser.js'
import {generalInfoReduser} from './generalInfo-reduser'
import {disciplinesReduser} from './disciplines-reduser'
import {VideoCoursesReducers} from './video-courses-redusers'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    LoginReduser,
    updateUserReduser,
    WHOsReduser,
    generalInfoReduser,
    disciplinesReduser,
    VideoCoursesReducers,
    form: formReducer
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;