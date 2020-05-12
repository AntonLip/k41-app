export const newsReduser = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newM = {
                id: 5,
                newM: state.newPostText,
            };
            state.News.push(newM);
            state.newPostText = "X";
            return state;
        case 'UPDATE-NEW-TEXT':
            state.newPostText = action.newText;
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