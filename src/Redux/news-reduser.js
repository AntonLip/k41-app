
let initialState = {
    newsPage: {
        News: [
            { newsHeader : "Freedom", newM: "I am a free man", id: 1,data: "22.07.2020" },
            { newsHeader : "MU", newM: "Glory MU", id: 2, data: "22.07.2020" },
        ],
        newPostText: "add news"
    }
}

export const newsReduser = (state = initialState, action) => {

    let copyState = {
        ...state
    }
    copyState.newsPage = { ...state.newsPage };
    switch (action.type) {
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