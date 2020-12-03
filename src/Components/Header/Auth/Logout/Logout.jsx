import React from 'react'
import {Link} from 'react-router-dom'

const Logout = () => {
    return (
        <div class="profile">
            <div class="profile-img profile__img">
                <img src="../../assets/img/Моисеев.jpg" alt="user"></img>
                <div class="profile-img__btn">Изменить фото</div>
            </div>
            <div class="profile__name">Липлянин Антон</div>
            <div class="profile__position">(старший преподаватель)</div>
            <ul class="profile-menu">
                <li class="profile-menu__link"><Link to="#">Сообщения</Link></li>
                <li class="profile-menu__link"><Link to="#">Задачи</Link></li>
                <li class="profile-menu__link"><Link to="#">Расписание</Link></li>
                <li class="profile-menu__link"><Link to="#">Личные данные</Link></li>
            </ul>
            <a href="#" class="profile__btn btn">Завершить сеанс</a>
        </div>
    )
}

export default Logout
