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


        this.state = {
            lessons: []
        }

    }
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {
        debugger
        var data = getAllLessonsinDisciplines(this.props.match.params.id)

        this.setState({
            lessons: data
        })

    }

    render() {
        console.log(this.props)
        return (
            <>
                <Route exact path="/lesson/:id" render={() => <Study />} />
                <Route path="/lesson/:id/edit" render={() => <EditLessonItem />} />
                <Route path="/lesson/:id/video" render={() => <LessonVideo/>} />

                <Route path="/lesson/:id/else" render={() => <LessonOther/>} />
                <Route path="/lesson/:id/plan" render={() => <LessonPlan/>} />
            </>
        )
    }
}




