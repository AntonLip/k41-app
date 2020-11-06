import { getNewsAPI } from "../API/newsAPI";

const GET_NEWS = 'GET_NEWS'

let initialState = {
    newsPage: {
        News: [
            { Header : "Freedom", Text: "I am a free man", _id: 1, data: "22.07.2020", From: " ", To : " ", Link : "" },
            { Header : "Freedom", Text: "I am a free man", _id: 2, data: "22.07.2020", From: " ", To : " ", Link : "" }
            

        ]
    }
}

export const newsReduser = (state = initialState, action) => {

    let copyState = {
        ...state
    }
    copyState.newsPage = { ...state.newsPage };
    switch (action.type) {
        case GET_NEWS :
            debugger
            if(action.data === 'undefined')
                return copyState;

            if (Array.isArray(action.data)) {
                copyState.newsPage.News = [...action.data];
            } else {

            }            
            return copyState;
        case 'ADD-POST':
            let newM = {
                id: 5,
                newM: state.newsPage.newPostText,
            };
            copyState.newsPage.News = [...state.newsPage.News];
            copyState.newsPage.News.push(newM);
            copyState.newsPage.newPostText = "enter text";
            return copyState;
        case 'UPDATE-NEW-TEXT':
            copyState.newsPage.newPostText = action.newText;
            return copyState;
        default:
            return state;
    }
}
export const  getNewsThunkCreator = () => {
    
    return (dispatch) => {
        debugger;
        getNewsAPI().then(data => {
    debugger;

            dispatch(getNewsAC(data));
        });
    }
}
export const getNewsAC = (data) => {
    debugger
    
    return {
        type: GET_NEWS,
        data
    }
}


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateTexttActionCreator = (newText) => {
    return {
        type: 'UPDATE-NEW-TEXT',
        newText
    }
}