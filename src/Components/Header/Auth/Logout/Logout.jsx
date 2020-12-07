import React from 'react'
import {Link} from 'react-router-dom'

<<<<<<< HEAD
const Logout = (props) => {
=======
const Logout = () => {
>>>>>>> refs/remotes/origin/Tsarenkov
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
<<<<<<< HEAD
            <a href="#" class="profile__btn btn" onClick={props.logout}>Завершить сеанс</a>
=======
            <a href="#" class="profile__btn btn">Завершить сеанс</a>
>>>>>>> refs/remotes/origin/Tsarenkov
        </div>
    )
}

export default Logout
