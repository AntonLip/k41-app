import { createStore, combineReducers, applyMiddleware } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import {ProfileReduser} from './profile-reduser'
import thunkMiddleware from 'redux-thunk'
import {LoginReduser} from './login-reduser'
import {newUserReduser} from './newUser-reduser'
import {updateUserReduser} from './updateuser-reduser.js'
import {reducer as formReducer} from 'redux-form'
import {WHOsReduser} from './whos-reduser.js'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    ProfileReduser,
    LoginReduser,
    newUserReduser,
    updateUserReduser,
    WHOsReduser,
    form: formReducer
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;