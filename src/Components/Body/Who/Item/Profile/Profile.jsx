import React from 'react'
import ProfileGroup from './ProfileGroup/ProfileGroup'

const Profile = (props) => {
    debugger
    let birthDay, unit;
    let path = "http://k41.kafedra41.local/Video/Vieo/Image?filename="
    props.info.birthDay === undefined ? birthDay = null :  birthDay = props.info.birthDay.split("T")[0]
    props.info.pathPhotoSmall === undefined ? path = null :  path = path + props.info.pathPhotoSmall
    props.info.unit === "undefined" ? unit="Кафедра АСУВ" : unit = props.info.unit;
        return (
            <div class="profile">
                <div class="profile-img profile__img">
                    <img src={path} alt="user"></img>
            </div>
                <div class="profile__name">{props.info.lastName} {props.info.firstName} {props.info.middleName}</div>
                <div class="profile__info">
                    <div class="profile__text profile__text--center">
                        Личные данные:
                </div>
                    <ProfileGroup title="Должность:" value={props.info.position} />
                    <ProfileGroup title="Воинское звание:" value={props.info.militaryRank} />
                    <ProfileGroup title="Дата рождения:" value={birthDay} />
                    {props.IsOfficers ? <ProfileGroup title="Подразделение:" value={unit} /> : <ProfileGroup title="Подразделение:" value={props.info.groupNumber} />}
                    
                    <ProfileGroup title="Контактный телефон:" value={props.info.telephoneNumber} />
                </div>
                <a href="#" class="profile__btn btn">Редактировать</a>
            </div>
        )    
}

export default Profile
