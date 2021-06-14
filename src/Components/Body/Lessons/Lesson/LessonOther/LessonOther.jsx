import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { getTest } from '../../../../../API/DisciplineAPI';
import LessonPage from '../LessonPage/LessonPage'

const LessonTestItem = (props) => {
    const [isActive, setIsActive]=React.useState(false)

    function toggleActive(){
        setIsActive(!isActive)
    }
    let answers = props.u.answers.map((a) => { return (
        <div>
            <input value={a.isChoosen} type="checkbox" ></input><span>{a.name}</span>
        </div>
    )});
    return (
        <div class="d-f ai-c mb">
        <div class="w-100">
            <div class={"sort__item" + " "+ (isActive ? "sort__item--active" : "")} onClick={toggleActive}>
                <div class="sort__title">{props.u.name}</div>
                <div class="sort__nav"> 
                    <div class="sort__img sort__img--ml">{isActive ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                </div>
            </div>
            <div class="sort-submenu sort__submenu">             
                {answers}
            </div> 
        </div>                  
    </div>
    )


}
export class LessonTest extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState({
            test: []
        })
    }
    componentDidMount() {
       this._getTest()
    }
    _getTest = () => {
        debugger
        getTest(this.props.id).then(data => {
            debugger
            this.setState({
                test: [ ...data ]
            })
        });
    }
    _checkTest = () => {
        console.log(this.state.test)
    }


    render() {
        debugger
        let test
        this.state === null ?
                test = () => { return <div /> } :
                this.state.test === undefined ? test = () => { return <div /> } :
                test = this.state.test.map((u) => { return <LessonTestItem u={u} /> })

        return (
            <LessonPage>
                <button class="news__link mb" onClick={this._getTest} >Get test <GrAdd /></button>
                <button class="news__link mb" onClick={this._checkTest} >Check test <GrAdd /></button>
                <div>{test}</div>
            </LessonPage>
        )
    }
}

