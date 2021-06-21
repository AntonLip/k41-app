import React from 'react'
import { reduxForm } from 'redux-form'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { InputDate } from '../Sort/Items/Date/InputDate'
import { ImageUpload } from '../Sort/Items/Input/items/File/ImageUploader'
import InputFile from '../Sort/Items/Input/items/File/InputFile'

const Comp404 = () => {
    
    return (
        <MainContentWrapper>           



        </MainContentWrapper>

    )
}

const Myform = (props) => {


    return (
        <form class="editForm" onSubmit={props.handleSubmit}>
            <InputDate title="Дата плана" name="datePlan" />
            <InputFile title="Файл документа" name="file" />
            <button type="submit" class="chat-input__submit btn">Добавить план</button>
        </form>
    )
}

const MyformFrom = reduxForm({ form: 'myform' })(Myform)

export default Comp404

/*
<div>
<ImageUpload />
</div >
{ <img  src="https://localhost:44383/Vieo/Image?filename=%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.png">
</img>}
<div>
Sorry. This part of websity is not found.
</div>
*/