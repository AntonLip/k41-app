
let initialState = {
    newsPage: {
        News: [
            { newM: "I am a free man", id: 1 },
            { newM: "Glory MU", id: 2 },
        ],
        newPostText: "add news"
    }
}


export const newsReduser = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case 'ADD-POST':
            let newM = {
                id: 5,
                newM: state.newsPage.newPostText,
            };
            state.newsPage.News.push(newM);
            state.newsPage.newPostText = "X";
            return state;
        case 'UPDATE-NEW-TEXT':
            state.newsPage.newPostText = action.newText;
            return state;
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