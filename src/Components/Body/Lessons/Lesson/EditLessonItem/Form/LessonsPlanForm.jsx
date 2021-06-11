import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { InputDate } from '../../../../Sort/Items/Date/InputDate'
import InputFile from '../../../../Sort/Items/Input/items/File/InputFile'
import InputDropDown from '../../../../Sort/Items/Input/items/InputDropDown/InputDropDown'

const video = [
    {}
]

const LessonsPlanForm = (props) => {
    debugger
    return (
        <>
            <form class="editForm">
                <InputDate title="Дата плана" name="datePlan" />
                <InputFile title="Файл документа" name="file" />
                <button type="submit" class="chat-input__submit btn">Добавить план</button>
            </form>
        </>
    )
}

export default reduxForm({ form: 'editLessonVideo' })(LessonsPlanForm)