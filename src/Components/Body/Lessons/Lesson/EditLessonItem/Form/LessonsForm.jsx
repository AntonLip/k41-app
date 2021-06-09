import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { AiFillDelete } from 'react-icons/ai'
import TextInput from '../../../../Sort/Items/Input/items/TextInput/TextInput'
import { ImageUpload } from '../../../../Sort/Items/Input/items/File/ImageUploader'
import { basePAth } from '../../../../../../API/api'
import InputDropDown from '../../../../Sort/Items/Input/items/InputDropDown/InputDropDown'

const EditLessonItem = (props) => {
    debugger
    return (
        <div>
            <form class="editForm" onSubmit={props.handleSubmit}>
                <TextInput title="Название раздела" name="sectionName" />
                <TextInput title="Название темы" name="themeName" />
                <TextInput title="Название занятия" name="name" />
                <InputDropDown title="Тип занятия"  link={props.lessonType}  name="lessonType" />
                <TextInput title="Номер занятия" name="currentNumberOflessonsType" />
                <TextInput title="Количество часов" name="countHours" />
                <button type="submit" class="chat-input__submit btn">Добавить занятие</button>
            </form>
            <ImageUpload class="editForm" title={"Методическая разработка"} url={"http://localhost:5000/api/Lessons/" + props.lesonId + "/methodic"} />
            <ImageUpload class="editForm" title={"Дополнительные материалы"} url={"http://localhost:5000/api/Lessons/" + props.lesonId + "/additional"} />
            <ImageUpload class="editForm" title={"Презентация"} url={"http://localhost:5000/api/Lessons/" + props.lesonId + "/presentation"} />
        </div>
    )
}


export default reduxForm({ form: 'editLessonItem' })(EditLessonItem)