import React from 'react'

const ProfileGroup = (props) => {
    return (
        <div class="profile__group">
            <div class="profile__text">
                {props.title}
            </div>
            <div class="profile__text">
                {props.value}
            </div>
        </div>
    )
}

export default ProfileGroup
