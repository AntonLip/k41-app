export const timetableReduser = (state, action) => {

    switch (action.type) {
        case 'ADD':            
            state.dataLesson.push(state.newLesson);
            return state;
        case 'UPDATE-NEW-LESSON':
            state.newLesson.time = action.newLesson.time;
            state.newLesson.name = action.newLesson.name;
            state.newLesson.Auditore = action.newLesson.Auditore;
            state.newLesson.Lectural = action.newLesson.Lectural;
            state.newLesson.type = action.newLesson.type;
            return state;
        default:
            return state;
    }
}

export const addTimetableCreator = () => {
    return {
        type: 'ADD'
    }
}

export const updateTimetableTextCreator = (newLesson) => {
    return {
        type: 'UPDATE-NEW-LESSON',
        newLesson
    }
}