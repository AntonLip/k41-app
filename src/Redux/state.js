
import {GoToWork}  from "../render"

let state = {
    LessonData : [{ name: "УЭСПД", Auditore: "239", Lectural: "Liplianin" },
                    { name: "ФК", Auditore: "213", Lectural: "Sidorov" },
                    { name: "Д444", Auditore: "239", Lectural: "Palchev" }],
    Groups : [{name : "442"},
                {name: "443"},
                {name: "423"},
                {name: "453"},
                {name: "452"}],
    News :[
        {newM : "I am a free man", id : 1},
        {newM : "Glory MU", id : 2},
    ],
    sidebar : {}
}
export let addPost = (newMessage) =>{
    let newM = {
        id : 5,
        newM : newMessage,
    };
    state.News.push(newM);
    GoToWork(state);
}
export default state;
 