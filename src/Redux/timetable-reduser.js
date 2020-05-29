
let initialState = {
    timetablePage: {
        dataLesson: [
            { id: 1, time: "1th", name: "УЭСПД", Auditore: "239", Lectural: "Liplianin", type: "lecture" },
            { id: 2, time: "2th", name: "ФК", Auditore: "213", Lectural: "Sidorov", type: "practice" },
            { id: 3, time: "3th", name: "Д444", Auditore: "239", Lectural: "Palchev", type: "laboratry" }
        ],
        newLesson: { id: 0, time: " ", name: " ", Auditore: " ", Lectural: " ", type: " " },
        dataGroups: [
            { name: "442" },
            { name: "443" },
            { name: "423" },
            { name: "453" },
            { name: "452" }
        ],
    }
}

export const timetableReduser = (state = initialState, action) => {

  debugger;
    switch (action.type) {
        case 'ADD':            
            state.timetablePage.dataLesson.push( state.timetablePage.newLesson);
            
            return state;
        case 'UPDATE-NEW-LESSON':
            state.timetablePage.newLesson.time = action.newLesson.time;
            state.timetablePage.newLesson.name = action.newLesson.name;
            state.timetablePage.newLesson.Auditore = action.newLesson.Auditore;
            state.timetablePage.newLesson.Lectural = action.newLesson.Lectural;
            state.timetablePage.newLesson.type = action.newLesson.type;
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