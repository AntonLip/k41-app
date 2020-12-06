import React from 'react'
import ProfileGroup from './ProfileGroup/ProfileGroup'

const Profile = () => {
    return (
        <div class="profile">
            <div class="profile-img profile__img">
                <img src="img/Моисеев.jpg" alt="user"></img>
            </div>
            <div class="profile__name">Сокол Виктор</div>
            <div class="profile__info">
                <div class="profile__text profile__text--center">
                    Личные данные:
                </div>
                <ProfileGroup title="Должность:" value="курсант"/>
                <ProfileGroup title="Воинское звание:" value="рядовой"/>
                <ProfileGroup title="Дата рождения:" value="11.10.1991"/>
                <ProfileGroup title="Подразделение:" value="453"/>
                <ProfileGroup title="Контактный телефон:" value="+375295046859"/>
            </div>
            <a href="#" class="profile__btn btn">Редактировать</a>
        </div>
    )
}

export default Profile
