import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import InputDropDown from '../../../../Sort/Items/Input/items/InputDropDown/InputDropDown'

const video = [
    {}
]

const LessonsVideoForm = (props) => {
    return (
        <>
            <form class="editForm">
                <InputDropDown title="Видео из видеотеки" link={video} size="1" name="From" />
                <button type="submit" class="chat-input__submit btn">Добавить видео</button>
            </form>
        </>
    )
}

export default reduxForm({ form: 'editLessonVideo' })(LessonsVideoForm)