import React from 'react'
import {Link} from 'react-router-dom'

import imgCab from '../../../../assets/img/news/img.png'
const Cab = (props) => {
    console.log(props)
    return (
            <div class="classroom">
                <div class="classroom__wrapper">
                    <Link to="/classrooms" class="classroom__link">Назад ко всем аудиториям</Link>
                    <div class="classroom__img">
                        <img src={imgCab} alt="image of cabinet"></img>
                    </div>
                    <div class="classroom-text classroom__text">
                        <p className="classroom-text__p">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, ipsam.
                        </p>
                        <p className="classroom-text__p">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minus veniam corporis explicabo, cumque sunt perferendis ratione? A, ex ipsa?
                        </p>
                        <p className="classroom-text__p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quod dolores quam excepturi enim quas?
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Cab
