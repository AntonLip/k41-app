import { createStore, combineReducers } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import {UserReduser} from './users-reduser'
import {ProfileReduser} from './profile-reduser'
import {AuthUserReduser} from './auth-reduser'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    UserReduser,
    ProfileReduser,
    AuthUserReduser
});


let store = createStore(redusersBatch);

export default store;