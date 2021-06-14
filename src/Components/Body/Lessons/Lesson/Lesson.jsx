import React from 'react'
import { Route } from 'react-router-dom'
import Study from './Study/Study'
import EditLessonItem from './EditLessonItem/EditLessonItem'
import LessonVideo from './LessonVideo/LessonVideo'
import LessonPlan from './LessonPlan/LessonPlan'
import { LessonTest } from './LessonOther/LessonOther'
import { getDisciplineByIdAPI } from '../../../../API/DisciplineAPI'

export class Lesson extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState({
            discipline: {  }
        })
    }
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {
        this.props.getLessons(this.props.match.params.id);
        this.props.getLessonType();
        this._setActivDisciplines();
    }
    add = (values) => {
        
        let value = {};

        value.name = values.name
        value.themeName = values.themeName
        value.sectionName = values.sectionName
        value.lessonType = values.lessonType
        value.DisciplineId = this.props.match.params.id
        value.countHours = Number(values.countHours)
        value.currentNumberOflessonsType = Number(values.currentNumberOflessonsType)
               
        this.props.addLesson(this.props.match.params.id, value);
    }
    _setActivDisciplines = () => {
        getDisciplineByIdAPI(this.props.match.params.id).then(data => {
            this.setState({
                discipline: { ...data.value }
            })
        });
        
    }
    delete = (id) => {        
        this.props.deleteLesson(id)
    }

    render() {
        debugger
        return (
            <>
                <Route exact path="/lesson/:id" render={() => <Study data={this.props.lessons} deleteLesson={this.delete}/>} />
                <Route path="/lesson/:id/edit" render={() => <EditLessonItem onSubmit={this.add} lessonType={this.props.lessonType} />} />
                <Route path="/lesson/:id/video" render={() => <LessonVideo />} />
                <Route path="/lesson/:id/test" render={() => <LessonTest id = {this.props.match.params.id}/>} />
                <Route path="/lesson/:id/plan" render={() => <LessonPlan  discipline = {this.state.discipline}/>} />
            </>
        )
    }
}




