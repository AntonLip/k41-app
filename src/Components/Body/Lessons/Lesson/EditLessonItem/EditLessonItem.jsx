
import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../../MainContentWrapper/MainContentWrapper'
import  LessonForm from "./Form/LessonsForm"
import LessonsVideoForm from './Form/LessonsVideoForm'
import LessonsPlanForm from './Form/LessonsPlanForm'



const EditLesson =(props)=> {    
  debugger
        return (
            <MainContentWrapper>
                <Link onClick={props.history.goBack} class="news__link news__link--mr"><GrLinkPrevious class="news__link-img" />Назад к дисциплине</Link>
                <Route exact path="/lesson/:id/edit" render={()=><LessonForm onSubmit={props.onSubmit} lessonType={props.lessonType} lesonId={props.match.params.id}/>} />
                <Route path="/lesson/:id/edit/video" render={()=><LessonsVideoForm/>} />
                <Route path="/lesson/:id/edit/plan" render={()=><LessonsPlanForm desciplineId={props.match.params.id}/>} />
            </MainContentWrapper>
        )
    } 

export default compose(
    withRouter
)(EditLesson)



