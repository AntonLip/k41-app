import { getNewsAPI, getSingleNewsAPI } from "../API/newsAPI";

const GET_NEWS = 'GET_NEWS'
const GET_SINGLE_NEWS = 'GET_SINGLE_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PORTION = 'SET_CURRENT_PORTION'
const SET_SORT = 'SET_SORT'


let initialState = {
    newsPage: {
        News: [

        ]
    },
    currentNews: {
        From: "",
        To: "",
        Date: "",
        Header: "",
        Link: "",
    },
    currentPage: 1,
    itemsPerPage: 9,
    totalCount: 0,
    currentPortion: 0,
    sort: {
        From: "",
        To: "",
        DateFrom: "",
        DateTo: ""
    }
}

export const newsReduser = (state = initialState, action) => {

    let copyState = {
        ...state
    }
    copyState.newsPage = { ...state.newsPage };
    switch (action.type) {
        case GET_NEWS:
            debugger
            if (action.data === 'undefined')
                return copyState;

            if (Array.isArray(action.data)) {
                copyState.newsPage.News = [...action.data];
            } else {

            }
            return copyState;
        case 'GET_SINGLE_NEWS':
            copyState.currentNews = { ...copyState.currentNews, ...action.data };
            return copyState;
        case 'SET_CURRENT_PAGE':
            debugger
            copyState.currentPage = action.data;
            return copyState;
        case 'SET_TOTAL_COUNT':
            debugger
            copyState.totalCount = action.data;
            return copyState;
        case 'SET_CURRENT_PORTION':
            debugger
            copyState.currentPortion = action.data;
            return copyState;
        case 'SET_SORT':
            debugger
            copyState.sort = { ...copyState.sort, ...action.data };
            return copyState;
        default:
            return state;
    }
}

export const getNewsAC = (data) => {
    return {
        type: GET_NEWS,
        data
    }
}

export const getSingleNewsAC = (data) => {
    return {
        type: GET_SINGLE_NEWS,
        data
    }
}

export const setCurrentPage = (data) => {
    return {
        type: SET_CURRENT_PAGE,
        data
    }
}

export const setTotalCount = (data) => {
    debugger

    return {
        type: SET_TOTAL_COUNT,
        data
    }
}

export const setSort = (data) => {
    return {
        type: SET_SORT,
        data
    }
}

export const setCurrentPortion = (data) => {
    return {
        type: SET_CURRENT_PORTION,
        data
    }
}

export const setCurrentPageThunkCreator = (page, count, sort) => {

    return (dispatch) => {
        debugger;
        getNewsAPI(page, count, sort).then(data => {
            if (data.news === undefined) {

            }
            else {
                dispatch(getNewsAC(data.news));
                dispatch(setCurrentPage(page));
            }
        });
    }
}

export const getNewsThunkCreator = (page, count, sort) => {

    return (dispatch) => {

        getNewsAPI(page, count, sort).then(data => {
            if (data === undefined) {

            }
            else {
                dispatch(getNewsAC(data.news));
                dispatch(setTotalCount(data.totalCount));
            }
        });
    }
}

export const getSingleNewsThunkCreator = (id) => {

    return (dispatch) => {

        getSingleNewsAPI(id).then(data => {

            dispatch(getSingleNewsAC(data));
        });
    }
}