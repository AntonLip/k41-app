import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { ImageUpload } from '../../../../Sort/Items/Input/items/File/ImageUploader'

const video = [
    {}
]

const LessonsPlanForm = (props) => {
    debugger
    return (
        <>            
            <ImageUpload class="editForm" title={"Учебный план по дисциплине"} url={"http://localhost:5000/api/Disciplines/" + props.desciplineId + "/plan"} />
            <ImageUpload class="editForm" title={"ГПИД по дисциплине"} url={"http://localhost:5000/api/Disciplines/" + props.desciplineId + "/gpid"} />
        </>
    )
}

export default reduxForm({ form: 'editLessonVideo' })(LessonsPlanForm)