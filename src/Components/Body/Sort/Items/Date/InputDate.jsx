import React from 'react'
import { BsCalendar } from "react-icons/bs";
import { Field } from 'redux-form';
import InputItem from '../Input/items/InputItem';

import Item from '../Item'


export const InputDate = (props) => {
    return (
        <InputItem title={props.title} >
            <Field type="date" component="input" name={props.name} class="chat-input__text" />
        </InputItem>


    )
}


