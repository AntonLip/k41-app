import { createStore, combineReducers } from "redux";
import {newsReduser} from "./news-reduser"
import {timetableReduser} from "./timetable-reduser"

let redusersBatch = combineReducers({
    newsReduser,
    timetableReduser
});


let store = createStore(redusersBatch);

export default store;