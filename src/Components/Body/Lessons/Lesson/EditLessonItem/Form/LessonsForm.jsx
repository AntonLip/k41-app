import React, { useState } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import InputFile, { FileInput } from '../../../../Sort/Items/Input/items/File/InputFile'
import { AiFillDelete } from 'react-icons/ai'
import TextInput from '../../../../Sort/Items/Input/items/TextInput/TextInput'
import { CheckboxArea } from '../../../../Sort/Items/Input/items/Checkdox/InputCheckbox'

const EditLessonItem = (props) => {
    const add = (value)=>
    {
        console.log(value)
    }
    return (
        <>
            <form class="editForm" onSubmit={props.handleSubmit(add)}>
                <TextInput title="Название занятия" name="Header" />
                <FieldArray name="Item" component={renderMembers} />
                <button type="submit" class="chat-input__submit btn">Добавить занятие</button>
            </form>
        </>
    )
}

const renderMembers = ({ fields, meta: { error, submitFailed } }) => {
    return (
        <>
            <button type="button" class="chat-input__submit btn" onClick={() => fields.push({})}>Добавить материал</button>
            {fields.map((member, index) => (
                <div class="d-f ai-c mb">
                    <div class="w-100 mr">
                        
                        <TextInput title="Название" name={`${member}.header`} />
                        
                    </div>
                    <AiFillDelete onClick={() => fields.remove(index)} />
                </div>
            ))}
        </>
    )

}

export default reduxForm({ form: 'editLessonItem' })(EditLessonItem)