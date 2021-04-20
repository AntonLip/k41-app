import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { Field } from 'redux-form'
import Item from '../../../../../Timetable/Item/Item'
import InputItem from '../InputItem'
import { ImageUpload } from './ImageUploader'



export const FileInput = (props) => {

    return (
        <Item img={<BsFillCaretDownFill />} imgActive={<BsFillCaretUpFill />} title={props.title}>
            <ImageUpload url={props.url} name={props.name} size={props.size} component="select" class="sort-submenu__select" />
        </Item>
    )
}

