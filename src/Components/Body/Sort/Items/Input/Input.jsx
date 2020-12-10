import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";

import Item from '../Item'
const Input = (props) => {
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
            <form class="chat-input chat__input">
                <div class="chat-input__text">Заголовок:</div>
                <textarea class="chat-input__text" rows="3"></textarea>
                <div class="chat-input__text">Текст:</div>
                <textarea class="chat-input__text" rows="5"></textarea>
                <div class="chat-input__text">Файл:</div>
                <input type="file"/>
                <div class="chat-input__text">Изображение:</div>
                <input type="file"/>
                <div class="chat-input__text">Кому:</div>
                <select name="who" size="1" class="sort-submenu__select">
                    {props.link && props.link.map(item => {
                        return <option>{item.name}</option>
                    })}
                </select>
                
                <input type="submit" class="chat-input__submit btn" value="Отправить"></input>
            </form>
        </Item> 
    )
}

export default Input
