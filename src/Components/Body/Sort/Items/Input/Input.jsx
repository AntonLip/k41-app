import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";

import Item from '../Item'
import InputFile from './items/File/InputFile';
import InputDropDown from './items/InputDropDown/InputDropDown';
import TextArea from './items/TextArea/TextArea';

const Input = (props) => {
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
            <form class="chat-input chat__input" onSubmit={props.handleSubmit}>
                {props.children}
                <button type="submit" class="chat-input__submit btn">{props.btnText}</button>
            </form>
        </Item> 
    )
}

export default Input

