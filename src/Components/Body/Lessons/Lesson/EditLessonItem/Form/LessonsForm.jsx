import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import InputFile, { FileInput } from '../../../../Sort/Items/Input/items/File/InputFile'
import { AiFillDelete } from 'react-icons/ai'
import TextInput from '../../../../Sort/Items/Input/items/TextInput/TextInput'
const addItem = (props) => {
    return (
        <>
            <form class="editForm">
                <TextInput title="Название занятия" name="Header"/>

                <FieldArray name="Item" component={renderMembers} />
                <button type="submit" class="chat-input__submit btn">Добавить занятие</button>
            </form>
        </>
    )
}

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <>
        <button type="button" class="chat-input__submit btn" onClick={() => fields.push({})}>Добавить материал</button>
        {fields.map((member, index) => (
            <div class="d-f ai-c mb">
                <div class = "w-100 mr">
                    <h4>Материал №{index + 1}</h4>
                    <TextInput title="Название" name={`${member}.header`}/>
                    <InputFile title="Файл" name={`${member}.file`} />
                </div>
                <AiFillDelete onClick={() => fields.remove(index)} />
            </div>
        ))}
    </>
)

export default reduxForm({ form: 'addLessonItem' })(addItem)