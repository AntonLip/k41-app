
import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import MainContentWrapper from '../../../MainContentWrapper/MainContentWrapper'
import { connect } from 'react-redux';
import  LessonForm from "./Form/LessonsForm"
import LessonsVideoForm from './Form/LessonsVideoForm'
import LessonsPlanForm from './Form/LessonsPlanForm'



const EditLesson =(props)=> {
        return (
            <MainContentWrapper>
                <Link onClick={props.history.goBack} class="news__link news__link--mr"><GrLinkPrevious class="news__link-img" />Назад к дисциплине</Link>
                <Route exact path="/lesson/:id/edit" render={()=><LessonForm/>} />
                <Route path="/lesson/:id/edit/video" render={()=><LessonsVideoForm/>} />
                <Route path="/lesson/:id/edit/plan" render={()=><LessonsPlanForm/>} />
                
            </MainContentWrapper>
        )
    } 

export default compose(
    withRouter
)(EditLesson)



