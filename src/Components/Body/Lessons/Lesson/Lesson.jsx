import React from 'react'
import { Route } from 'react-router-dom'
import Study from './Study/Study'
import { getAllLessonsinDisciplines } from '../../../../API/DisciplineAPI'
import EditLessonItem from './EditLessonItem/EditLessonItem'
import LessonVideo from './LessonVideo/LessonVideo'
import LessonPlan from './LessonPlan/LessonPlan'
import LessonOther from './LessonOther/LessonOther'

export class Lesson extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {
        this.props.getLessons(this.props.match.params.id);
        this.props.getLessonType();
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
        
        debugger
        this.props.addLesson(this.props.match.params.id, value);

    }
    render() {

        return (
            <>
                <Route exact path="/lesson/:id" render={() => <Study data={this.props.lessons} />} />
                <Route path="/lesson/:id/edit" render={() => <EditLessonItem onSubmit={this.add} lessonType={this.props.lessonType} />} />
                <Route path="/lesson/:id/video" render={() => <LessonVideo />} />
                <Route path="/lesson/:id/else" render={() => <LessonOther />} />
                <Route path="/lesson/:id/plan" render={() => <LessonPlan />} />
            </>
        )
    }
}




