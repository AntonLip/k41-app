import React from 'react'
import imgChif from '../../../../assets/img/Моисеев.jpg'

const Chif = (props) => {
	return (
		<div class="history-chif__item">
			<div class="history-chif__img">
				<img src={imgChif} alt="chif_img"></img>
			</div>
			<div class="history-chif__position">
				{props.position}
			</div>
			<div class="history-chif__rank">
				{props.rank}
			</div>
			<div class="history-chif__name">
				<span>{props.SecondName}</span>
				<span>{props.FirsName}</span>
				<span>{props.MiddleName}</span>
			</div>
		</div>
	)
}

export default Chif
