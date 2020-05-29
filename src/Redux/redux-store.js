import { createStore, combineReducers } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"
import {UserReduser} from './users-reduser'
let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser,
    UserReduser
});


let store = createStore(redusersBatch);

export default store;