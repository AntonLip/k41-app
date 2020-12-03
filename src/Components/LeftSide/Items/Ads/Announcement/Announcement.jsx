import React from 'react'
import {Link} from 'react-router-dom'

const Announcement = () => {
    return (
        <Link to="#" class="leftsitebar-news__item">
            <div class="leftsitebar-news__title">
                Заголовок
            </div>
            <div class="leftsitebar-news__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, pariatur.
            </div>
        </Link>
    )
}

export default Announcement
