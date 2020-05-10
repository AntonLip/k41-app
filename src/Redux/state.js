
import {GoToWork} from "./../index"
let store = {
    _state : {
        LessonData: [{ name: "УЭСПД", Auditore: "239", Lectural: "Liplianin" },
        { name: "ФК", Auditore: "213", Lectural: "Sidorov" },
        { name: "Д444", Auditore: "239", Lectural: "Palchev" }],
        Groups: [{ name: "442" },
        { name: "443" },
        { name: "423" },
        { name: "453" },
        { name: "452" }],
        News: [
            { newM: "I am a free man", id: 1 },
            { newM: "Glory MU", id: 2 },
        ],
        newTextArea: "Enter your massedge",
        sidebar: {}
    },
    getState(){
        return this._state;
    },
    addPost() {
        let newM = {
            id: 5,
            newM: this.state.newTextArea,
        };
        this.state.News.push(newM)
        GoToWork(this.state);
    },
    changeText(newText) {
        this.state.newTextArea = newText;
        GoToWork(this.state);
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            this.addPost()
        }else if(action.type === "CHANGE-TEXT-POST"){
            this.changeText(action.newText)
        }
    }
}

export const addPostActionCreator = () => {
return {
    type:'ADD-POST'
}
}

export const updateTextPostActionCreator = (newText) => {
    return {
        type:'CHANGE-TEXT-POST',
        newText
    }
    }

export default store;
