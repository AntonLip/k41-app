import React from 'react'

import Item from '../Item'
import trianglImg from '../../../../../assets/img/triangl.png'

const Input = (props) => {
    return (
        <Item img={trianglImg} title={props.title}>
            <form class="leftsitebar-chat-input leftsitebar-chat__input">
                <div class="leftsitebar-chat-input__text">Заголовок:</div>
                <textarea class="leftsitebar-chat-input__text" rows="3"></textarea>
                <div class="leftsitebar-chat-input__text">Текст:</div>
                <textarea class="leftsitebar-chat-input__text" rows="5"></textarea>
                <div class="leftsitebar-chat-input__text">Файл:</div>
                <input type="file"/>
                <div class="leftsitebar-chat-input__text">Изображение:</div>
                <input type="file"/>
                <div class="leftsitebar-chat-input__text">Кому:</div>
                <select name="who" size="1" class="sort-submenu__select">
                    {props.link && props.link.map(item => {
                        return <option>{item.title}</option>
                    })}
                </select>
                
                <input type="submit" class="leftsitebar-chat-input__submit btn" value="Отправить"></input>
            </form>
        </Item> 
    )
}

export default Input
