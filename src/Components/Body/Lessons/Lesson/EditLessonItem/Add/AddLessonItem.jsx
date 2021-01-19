
import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import MainContentWrapper from '../../../../MainContentWrapper/MainContentWrapper'
import { connect } from 'react-redux';
import AddItemForm from "../Form/LessonsForm"



const AddLessonItem =(props)=> {
        return (
            <MainContentWrapper>
                <Link onClick={props.history.goBack} class="news__link news__link--mr"><GrLinkPrevious class="news__link-img" />Назад к дисциплине</Link>
                <AddItemForm/>
            </MainContentWrapper>
        )
    } 

export default compose(
    withRouter
)(AddLessonItem)



