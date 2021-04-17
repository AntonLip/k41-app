import React from 'react'

import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'
import imgChif from '../../../../assets/img/Моисеев.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const SwiperSlider = () => {
	return (

		<MainContentWrapper>
			<Swiper
				// Навигационные кнопки
				navigation={
					// Название классов
					{ nextEl: '.swiper-button-next' },
					{ prevEl: '.swiper-button-prev' }
				}
				// Пагинация
				pagination={
					// Название класса
					{ el: '.swiper-pagination' },
					// Тип
					{ type: 'bullets' },
					// Возмлжность нажатия
					{ clickable: true }
				}
				// перетаскивания слайдов на ПК
				simulateTouch={true}
				// Курсор перетаскивания
				grabCursor={true}
				// Активный слайд по центру
				centeredSlides={true}
				// Обновить свайпер при изменении элементов слайдера
				observer={true}
				// Обновить свайпер при изменении родительских элементов слайдера
				observeParents={true}
				// Количество слайдов для показа
				slidesPerView={1.5}
				// Отступ между слайдами
				// spaceBetween={100}
				// Бесконечный слайдер 
				loop={true}
				// Переключение при клике на слайд
				slideToClickedSlide={true}
				// Эффекты переключения слайдов.
				effect="coverflow"
				// Настройки к coverflow
				coverflowEffect={
					// Угол
					{ rotate: 20 },
					// Наложение
					{ stretch: 50 },
					// Тень
					{ slideShadows: true }
				}
			>
				<SwiperSlide>
					<div class="swiper-slide">
						<div class="slide">
							<div class="slide__img">
								<img src={imgChif} alt="chif_img"></img>
							</div>
							<div class="slide__title">должность</div>
							<div class="slide__subtitle">в. зв-е ФАМИЛИЯ Имя Отчество</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="swiper-slide">
						<div class="slide">
							<div class="slide__img">
								<img src={imgChif} alt="chif_img"></img>
							</div>
							<div class="slide__title">должность</div>
							<div class="slide__subtitle">в. зв-е ФАМИЛИЯ Имя Отчество</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="swiper-slide">
						<div class="slide">
							<div class="slide__img">
								<img src={imgChif} alt="chif_img"></img>
							</div>
							<div class="slide__title">должность</div>
							<div class="slide__subtitle">в. зв-е ФАМИЛИЯ Имя Отчество</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</MainContentWrapper >
	)


}

export default History
