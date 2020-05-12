let store = {
    _state: {
        LessonData: [
            { name: "УЭСПД", Auditore: "239", Lectural: "Liplianin" },
            { name: "ФК", Auditore: "213", Lectural: "Sidorov" },
            { name: "Д444", Auditore: "239", Lectural: "Palchev" }
        ],
        Groups: [
            { name: "442" },
            { name: "443" },
            { name: "423" },
            { name: "453" },
            { name: "452" }
        ],
        News: [
            { newM: "I am a free man", id: 1 },
            { newM: "Glory MU", id: 2 },
        ],
        newPostText : "add news"
    },
    GoToWork() {
        console.log('State change');
    },
    subscribe(observer) {
        this.GoToWork = observer;
    },
    GetState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST'){
            
            let newM = {
                id: 5,
                newM: this._state.newPostText,
            };
            this._state.News.push(newM);
            this.GoToWork(this._state);
        }else if(action.type === 'UPDATE-NEW-TEXT'){
            
            this._state.newPostText = action.newText;
            this.GoToWork(this._state);
        }
    }
}

export const addPostActionCreator=()=>{
    return{
      type:'ADD-POST'
    }
  }
  
 export const updateTexttActionCreator=(newText)=>{
    return{
      type:'UPDATE-NEW-TEXT',
      newText
      }
  }

window.store = store;
export default store;
