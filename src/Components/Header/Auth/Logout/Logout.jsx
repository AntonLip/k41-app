import React from 'react'
import { Link } from 'react-router-dom'

const Logout = (props) => {
    return (
        <div class="profile">
            <div class="profile-img profile__img">
                <img src="../../assets/img/Моисеев.jpg" alt="user"></img>
                <div class="profile-img__btn" onClick={props.changePhoto}>Изменить фото</div>
            </div>
            <div class="profile__name">{props.family_name} {props.given_name}</div>
            <div class="profile__position">({props.position})</div>
            <ul class="profile-menu">
                <li class="profile-menu__link"><Link to="#">Сообщения</Link></li>
                <li class="profile-menu__link"><Link to="#">Задачи</Link></li>
                <li class="profile-menu__link"><Link to="#">Расписание</Link></li>
                <li class="profile-menu__link"><Link to="#">Личные данные</Link></li>
            </ul>
            <a href="#" class="profile__btn btn" onClick={props.logout}>Завершить сеанс</a>
        </div>
    )
}

export default Logout
