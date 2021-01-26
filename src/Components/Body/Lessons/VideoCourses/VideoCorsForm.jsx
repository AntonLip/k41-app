import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Field, FieldArray } from 'redux-form'
import { FileInput } from '../../Sort/Items/Input/items/File/InputFile'
import InputItem from '../../Sort/Items/Input/items/InputItem'
import TextArea from '../../Sort/Items/Input/items/TextArea/TextArea'
import TextInput from '../../Sort/Items/Input/items/TextInput/TextInput'

const VideoCorsForm = () => {
    return (
        <>
            <TextInput title="Название видеокурса" name="name" />
            <TextArea title="Описание видеокурса" name="info" />
        </>

    )
}

const renderMembers = ({ fields, meta: { error, submitFailed } }) => {
    return (
        <>
            <button type="button" class="chat-input__submit btn" onClick={() => fields.push({})}>Добавить серию</button>
            {fields.map((member, index) => (
                <InputItem title={"Серия №" + (index + 1)}>
                    <div class="d-f ai-c mb">
                        <div class="w-100 mr">
                            <div>Название:</div>
                            <Field name={`${member}.header`} class="chat-input__text" component="input" type="text"/>
                            <div>Файл:</div>
                            <Field name={`${member}.file`} component={FileInput} type="file" class="chat-input__text" />
                        </div>
                        <AiFillDelete onClick={() => fields.remove(index)} />
                    </div>
                </InputItem>

            ))}
        </>
    )

}

export default VideoCorsForm
