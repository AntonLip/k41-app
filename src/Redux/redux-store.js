import { createStore, combineReducers, applyMiddleware } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import thunkMiddleware from 'redux-thunk'
import {LoginReduser} from './login-reduser'
import {newUserReduser} from './newUser-reduser'
import {updateUserReduser} from './updateuser-reduser.js'
import {reducer as formReducer} from 'redux-form'
import {WHOsReduser} from './whos-reduser.js'
import {generalInfoReduser} from './generalInfo-reduser'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    LoginReduser,
    newUserReduser,
    updateUserReduser,
    WHOsReduser,
    generalInfoReduser,
    form: formReducer
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;