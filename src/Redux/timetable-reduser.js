
let initialState = {
    timetablePage: {
        dataLesson: [],
        newLesson: { id: 0, time: " ", name: " ", Auditore: " ", Lectural: " ", type: " " },
        dataGroups: [
           
        ],
    }
}

export const timetableReduser = (state = initialState, action) => {

  debugger;

    let stateCopy = {...state};
    stateCopy.timetablePage = {...state.timetablePage};
    switch (action.type) {
        case 'ADD':    
        debugger;        
            //state.timetablePage.dataLesson.push( state.timetablePage.newLesson);
            stateCopy.timetablePage.dataLesson = [...state.timetablePage.dataLesson];
            stateCopy.timetablePage.dataLesson.push( state.timetablePage.newLesson);
            return stateCopy;
        case 'UPDATE-NEW-LESSON':            
            stateCopy.timetablePage.newLesson = {...state.timetablePage.newLesson};
            stateCopy.timetablePage.newLesson = {...action.newLesson};
            return stateCopy;
        case 'SET_DATA':
            stateCopy.timetablePage.dataGroups = [...action.dataGroups.dataGroups];
            stateCopy.timetablePage.dataLesson = [...action.dataLesson.dataLesson];
            return stateCopy;
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

export const setDataAC = (dataLesson, dataGroups) => {
    return {
        type: 'SET_DATA',
        dataLesson,
        dataGroups
    }
}