import { deleteSingleNewsAPI, getNewsAPI, getSingleNewsAPI, postNewsAPI, putSingleNewsAPI } from "../API/newsAPI";

const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS'
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
        case SET_NEWS:
            debugger
            if (action.data === 'undefined')
                return copyState;

            if (Array.isArray(action.data)) {
                copyState.newsPage.News = [...action.data];
            } else {

            }
            return copyState;
        case 'SET_CURRENT_NEWS':
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
            copyState.sort = { ...copyState.sort, ...action.data };
            return copyState;
        default:
            return state;
    }
}

export const setNewsAC = (data) => {
    return {
        type: SET_NEWS,
        data
    }
}

export const setCurrentNewsAC = (data) => {
    return {
        type: SET_CURRENT_NEWS,
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
                dispatch(setNewsAC(data.news));
                dispatch(setCurrentPage(page));
            }
        });
    }
}

export const setNewsThunkCreator = (page, count, sort) => {

    return (dispatch) => {

        getNewsAPI(page, count, sort).then(data => {
            if (data === undefined) {

            }
            else {
                dispatch(setNewsAC(data.news));
                dispatch(setTotalCount(data.totalCount));
            }
        });
    }
}

export const setCurrentNewsThunkCreator = (id) => {

    return (dispatch) => {

        getSingleNewsAPI(id).then(data => {

            dispatch(setCurrentNewsAC(data));
        });
    }
}

export const setSortThunkCreator = (page, count, sort) => {

    return (dispatch) => {
        dispatch(setSort(sort));
        dispatch(setCurrentPage(page));
        getNewsAPI(page, count, sort).then(data => {
            dispatch(setNewsAC(data.news));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const postNewsThunkCreator = (data) => {
    return (dispatch) => {
        postNewsAPI(data)
    }
}

export const deleteNewsThunkCreator = (id, isDelete) => {
    return (dispatch) => {
        debugger
        deleteSingleNewsAPI(id, isDelete).then(resp => {
            if (resp == 200){
               
            }
        })
    }
}

export const putNewsThunkCreator = (id,data) => {
    return (dispatch) => {
        putSingleNewsAPI(id,data).then(resp => {
            if (resp == 204){
                dispatch(setCurrentNewsAC(data));
            }
        })
    }
}
