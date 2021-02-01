import React from 'react'
import { ImageUpload } from '../../Sort/Items/Input/items/File/ImageUploader'
import TextArea from '../../Sort/Items/Input/items/TextArea/TextArea'
import TextInput from '../../Sort/Items/Input/items/TextInput/TextInput'

const VideoCorsForm = (props) => {
    
    return (
        <>
            <TextInput title="Название видеокурса" name="name" />
            <TextArea title="Описание видеокурса" name="info" />
            <ImageUpload class="editForm" title={"Добавить серию"} id={props.id}/>
        </>

    )
}


export default VideoCorsForm
