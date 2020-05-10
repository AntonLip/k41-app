const newsReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        state.News.push(state.newTextArea);
    }else if(action.type === "CHANGE-TEXT-POST"){
        state.newTextArea = action.newText;
    }
    
    
    return state;
}

const timetableReducer = (state, action) => {


    return state;
}