import React from 'react'
// import Chif from './Chif/Chif'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import imgChif from '../../../assets/img/Моисеев.jpg'

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

const History = () => {
	return (
		<MainContentWrapper>
			<div class="history">
				<div class="swiper-container swiper-mans">

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

				</div>
				<div class="content">
					<div class="content__paragraph -right-content">
						<div class="content__img">
							<img src={imgChif} alt="chif_img"></img>
						</div>
						<div class="content__text">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium molestias
							a
							asperiores ad saepe similique pariatur rem. Incidunt, dicta repellat nisi eius eos
							aliquid quae minima commodi molestias vitae vero! Rerum unde ad quod ipsum
							voluptates
							eius alias corrupti eligendi, doloribus porro. Explicabo similique perferendis minus
							id
							commodi mollitia? Officiis facilis sit non, vero ipsa qui dolorem, iusto ea corporis
							hic
							placeat sint recusandae perferendis quas inventore repellat aspernatur nemo illum?
							Reiciendis voluptates praesentium iusto placeat, iste nisi dolores debitis, deleniti
							nobis pariatur voluptate corrupti sapiente exercitationem quam assumenda ut qui quae
							tenetur? Sit eaque quae porro in. Nemo suscipit reprehenderit voluptatibus eveniet
							saepe, ratione necessitatibus dolore sapiente corporis aliquam natus eligendi,
							praesentium et dolorum sint, laborum dicta consequatur enim temporibus ipsam iure ex
							rerum? Optio vero ipsum autem in provident at, pariatur nisi. Voluptatibus, animi!
							Quos
							perferendis et aut, placeat quia iusto quam, modi nostrum possimus quisquam ea sit
							magnam qui excepturi ipsum quibusdam maiores. Reiciendis architecto, hic veritatis
							illum
							corporis soluta eveniet enim rem. Explicabo corrupti ipsum qui tempore pariatur
							quibusdam possimus delectus quidem architecto atque dicta laborum fugiat quae,
							repellat
							quam, expedita mollitia culpa. Pariatur nobis voluptates similique voluptate
							voluptatum
							iste cumque deleniti sed cum odio, in sunt dicta eum magnam earum, totam laborum
							fugit
							possimus? Maxime accusamus, voluptatem quibusdam a iste dolores facilis quos
							inventore
							rem vel est. Expedita iusto, repellat, recusandae nemo dolorem vitae placeat animi
							saepe, enim excepturi eos quos quae modi dolor veritatis tempore esse odit
							voluptates
							velit rem! Consequatur consequuntur necessitatibus inventore corrupti beatae magnam
							saepe, ex alias temporibus delectus ullam repellat hic voluptatibus, et omnis autem
							deleniti fugiat quidem qui! Reiciendis rerum repellendus ipsa tempore laboriosam?
							Tenetur eum eos delectus nesciunt minus consectetur nisi adipisci. Ipsam dolore
							repellendus praesentium accusantium consequatur amet rerum aliquam repudiandae enim,
                                    alias minima illo expedita.</p>
						</div>
					</div>
					<div class="content__main-text">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut officiis quae error
						dolorem,
						ducimus officia laudantium nulla excepturi neque est impedit similique aliquid eum
						perferendis inventore numquam voluptate modi enim assumenda quibusdam minima? Eius
						tenetur
						aliquid suscipit exercitationem non autem. Ducimus suscipit facere recusandae. Provident
						consectetur cum consequuntur ipsam sint laboriosam eveniet at dolore. Explicabo dicta
						pariatur autem eos cupiditate corporis ipsam, eum, vel, fugiat non culpa laudantium.
						Eius
						soluta eaque sit voluptatibus dignissimos vitae quis quae? Fuga quae, sed reiciendis
						exercitationem placeat nam tenetur qui provident itaque illum eos enim quam dolorum
						cupiditate laudantium aperiam, necessitatibus dicta neque asperiores id fugiat debitis?
						Distinctio iusto, accusamus optio id nesciunt, commodi consequatur incidunt sequi
						facilis ad
						itaque tempore delectus, explicabo ex atque ratione omnis. Explicabo maxime in eum
						blanditiis perspiciatis officiis voluptatem dignissimos praesentium ratione! Sunt non
						numquam, blanditiis architecto quidem obcaecati! Suscipit amet sit distinctio doloremque
						nulla, modi ex provident id a aspernatur alias vel quas asperiores numquam commodi
						ipsum,
						qui excepturi veritatis. Tempora labore minima impedit quae magnam. Voluptatibus nobis
						asperiores aperiam tempore tempora unde illum, iusto eius nesciunt vitae facilis amet
						sed
						beatae sunt ipsum, labore expedita neque distinctio ducimus ipsam? Nesciunt
						exercitationem
						doloremque, commodi, sequi quibusdam eos maxime consequatur porro amet dolore iste
						temporibus nam, natus similique illo alias! Enim modi exercitationem, dignissimos
						recusandae
						aliquam, dolore omnis nostrum nulla beatae natus, atque adipisci! Nulla exercitationem
						deserunt earum recusandae architecto vitae suscipit eum sunt alias est molestiae
						excepturi
						sequi voluptas voluptatum culpa dignissimos, quia voluptatem amet eos debitis. Amet,
						quia
						aperiam sapiente fugit officiis a officia vel inventore dignissimos facere nemo itaque
						odio
						rem, recusandae consequatur architecto ipsum soluta iusto quidem tempora explicabo
						animi.
						Nesciunt praesentium doloremque repellat dolor officia fuga quo provident, quae maxime
						quod
						laborum, quibusdam sint eligendi placeat asperiores obcaecati unde odio fugiat
						veritatis.
                            </p>
					</div>
					<div class="content__paragraph content__paragraph-left-content">
						<div class="content__img">
							<img src={imgChif} alt="chif_img"></img>
						</div>
						<div class="content__text">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium molestias
							a
							asperiores ad saepe similique pariatur rem. Incidunt, dicta repellat nisi eius eos
							aliquid quae minima commodi molestias vitae vero! Rerum unde ad quod ipsum
							voluptates
							eius alias corrupti eligendi, doloribus porro. Explicabo similique perferendis minus
							id
							commodi mollitia? Officiis facilis sit non, vero ipsa qui dolorem, iusto ea corporis
							hic
							placeat sint recusandae perferendis quas inventore repellat aspernatur nemo illum?
							Reiciendis voluptates praesentium iusto placeat, iste nisi dolores debitis, deleniti
							nobis pariatur voluptate corrupti sapiente exercitationem quam assumenda ut qui quae
							tenetur? Sit eaque quae porro in. Nemo suscipit reprehenderit voluptatibus eveniet
							saepe, ratione necessitatibus dolore sapiente corporis aliquam natus eligendi,
							praesentium et dolorum sint, laborum dicta consequatur enim temporibus ipsam iure ex
							rerum? Ullam obcaecati? Autem molestias vitae minus omnis
							laboriosam ullam, voluptas officia error praesentium, sunt, aspernatur sapiente esse
							qui
							id perferendis non corrupti a voluptatibus exercitationem illo quia perspiciatis
							voluptatem. Deleniti vel eveniet atque iusto quisquam alias optio dolore ipsa, odio
                                    nostrum reprehenderit eaque, sint, aliquid nesciunt?</p>
						</div>
					</div>

					<div class="swiper">
						<div class="swiper-container swiper-technics">


							<Swiper
								// Управление колесом мыши
								mousewheel={{ sensitivity: 0.4 }}
								freeMode={true}
								// перетаскивания слайдов на ПК
								simulateTouch={true}
								// Курсор перетаскивания
								grabCursor={true}
								// Обновить свайпер при изменении элементов слайдера
								observer={true}
								// Обновить свайпер при изменении родительских элементов слайдера
								observeParents={true}
								// Количество слайдов для показа
								slidesPerView={2.4}
							// Бесконечный слайдер
							// loop={true}
							>
								<SwiperSlide>
									<div class="swiper-slide">
										<div class="slide">
											<a href="#tech-1" class="_popup-link">
												<div class="slide__img">
													<img src={imgChif} alt="chif_img"></img>
												</div>
												<div class="slide__title">
													Название техники 1
												</div>
											</a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="swiper-slide">
										<div class="slide">
											<a href="#tech-1" class="_popup-link">
												<div class="slide__img">
													<img src={imgChif} alt="chif_img"></img>
												</div>
												<div class="slide__title">
													Название техники 2
												</div>
											</a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="swiper-slide">
										<div class="slide">
											<a href="#tech-1" class="_popup-link">
												<div class="slide__img">
													<img src={imgChif} alt="chif_img"></img>
												</div>
												<div class="slide__title">
													Название техники 3
												</div>
											</a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="swiper-slide">
										<div class="slide">
											<a href="#tech-1" class="_popup-link">
												<div class="slide__img">
													<img src={imgChif} alt="chif_img"></img>
												</div>
												<div class="slide__title">
													Название техники 4
												</div>
											</a>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>




						</div>
					</div>

					<div class="content__paragraph content__paragraph-right-content">
						<div class="content__img">
							<img src={imgChif} alt="chif_img"></img>
						</div>
						<div class="content__text">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium molestias
							a
							asperiores ad saepe similique pariatur rem. Incidunt, dicta repellat nisi eius eos
							aliquid quae minima commodi molestias vitae vero! Rerum unde ad quod ipsum
							voluptates
							eius alias corrupti eligendi, doloribus porro. Explicabo similique perferendis minus
							id
							commodi mollitia? Officiis facilis sit non, vero ipsa qui dolorem, iusto ea corporis
							hic
							placeat sint recusandae perferendis quas inventore repellat aspernatur nemo illum?
							Reiciendis voluptates praesentium iusto placeat, iste nisi dolores debitis, deleniti
							nobis pariatur voluptate corrupti sapiente exercitationem quam assumenda ut qui quae
							tenetur? Sit eaque quae porro in. Nemo suscipit reprehenderit voluptatibus eveniet
							saepe, ratione necessitatibus dolore sapiente corporis aliquam natus eligendi,
							praesentium et dolorum sint, laborum dicta consequatur enim temporibus ipsam iure ex
							rerum? Optio vero ipsum autem in provident at, pariatur nisi. Voluptatibus, animi!
							Quos
							perferendis et aut, placeat quia iusto quam, modi nostrum possimus quisquam ea sit
							magnam qui excepturi ipsum quibusdam maiores. Reiciendis architecto, hic veritatis
							illum
							corporis soluta eveniet enim rem. Explicabo corrupti ipsum qui tempore pariatur
							quibusdam possimus delectus quidem architecto atque dicta laborum fugiat quae,
							repellat
							quam, expedita mollitia culpa. Pariatur nobis voluptates similique voluptate
							voluptatum
							iste cumque deleniti sed cum odio, in sunt dicta eum magnam earum, totam laborum
							fugit
							possimus? Maxime accusamus, voluptatem quibusdam a iste dolores facilis quos
							inventore
							rem vel est. Expedita iusto, repellat, recusandae nemo dolorem vitae placeat animi
							saepe, enim excepturi eos quos quae modi dolor veritatis tempore esse odit
							voluptates
							velit rem! Consequatur consequuntur necessitatibus inventore corrupti beatae magnam
							saepe, ex alias temporibus delectus ullam repellat hic voluptatibus, et omnis autem
							deleniti fugiat quidem qui! Reiciendis rerum repellendus ipsa tempore laboriosam?
							Tenetur eum eos delectus nesciunt minus consectetur nisi adipisci. Ipsam dolore
							repellendus praesentium accusantium consequatur amet rerum aliquam repudiandae enim,
                                    alias minima illo expedita.</p>
						</div>
					</div>
					<div class="content__main-text">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut officiis quae error
						dolorem,
						ducimus officia laudantium nulla excepturi neque est impedit similique aliquid eum
						perferendis inventore numquam voluptate modi enim assumenda quibusdam minima? Eius
						tenetur
						aliquid suscipit exercitationem non autem. Ducimus suscipit facere recusandae. Provident
						consectetur cum consequuntur ipsam sint laboriosam eveniet at dolore. Explicabo dicta
						pariatur autem eos cupiditate corporis ipsam, eum, vel, fugiat non culpa laudantium.
						Eius
						soluta eaque sit voluptatibus dignissimos vitae quis quae? Fuga quae, sed reiciendis
						exercitationem placeat nam tenetur qui provident itaque illum eos enim quam dolorum
						cupiditate laudantium aperiam, necessitatibus dicta neque asperiores id fugiat debitis?
						Distinctio iusto, accusamus optio id nesciunt, commodi consequatur incidunt sequi
						facilis ad
						itaque tempore delectus, explicabo ex atque ratione omnis. Explicabo maxime in eum
						blanditiis perspiciatis officiis voluptatem dignissimos praesentium ratione! Sunt non
						numquam, blanditiis architecto quidem obcaecati! Suscipit amet sit distinctio doloremque
						nulla, modi ex provident id a aspernatur alias vel quas asperiores numquam commodi
						ipsum,
						qui excepturi veritatis. Tempora labore minima impedit quae magnam. Voluptatibus nobis
						asperiores aperiam tempore tempora unde illum, iusto eius nesciunt vitae facilis amet
						sed
						beatae sunt ipsum, labore expedita neque distinctio ducimus ipsam? Nesciunt
						exercitationem
						doloremque, commodi, sequi quibusdam eos maxime consequatur porro amet dolore iste
						temporibus nam, natus similique illo alias! Enim modi exercitationem, dignissimos
						recusandae
						aliquam, dolore omnis nostrum nulla beatae natus, atque adipisci! Nulla exercitationem
						deserunt earum recusandae architecto vitae suscipit eum sunt alias est molestiae
						excepturi
						sequi voluptas voluptatum culpa dignissimos, quia voluptatem amet eos debitis. Amet,
						quia
						aperiam sapiente fugit officiis a officia vel inventore dignissimos facere nemo itaque
						odio
						rem, recusandae consequatur architecto ipsum soluta iusto quidem tempora explicabo
						animi.
						Nesciunt praesentium doloremque repellat dolor officia fuga quo provident, quae maxime
						quod
						laborum, quibusdam sint eligendi placeat asperiores obcaecati unde odio fugiat
						veritatis.
                            </p>
					</div>
					<div class="content__paragraph content__paragraph-left-content">
						<div class="content__img">
							<img src={imgChif} alt="chif_img"></img>
						</div>
						<div class="content__text">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium molestias
							a
							asperiores ad saepe similique pariatur rem. Incidunt, dicta repellat nisi eius eos
							aliquid quae minima commodi molestias vitae vero! Rerum unde ad quod ipsum
							voluptates
							eius alias corrupti eligendi, doloribus porro. Explicabo similique perferendis minus
							id
							commodi mollitia? Officiis facilis sit non, vero ipsa qui dolorem, iusto ea corporis
							hic
							placeat sint recusandae perferendis quas inventore repellat aspernatur nemo illum?
							Reiciendis voluptates praesentium iusto placeat, iste nisi dolores debitis, deleniti
							nobis pariatur voluptate corrupti sapiente exercitationem quam assumenda ut qui quae
							tenetur? Sit eaque quae porro in. Nemo suscipit reprehenderit voluptatibus eveniet
							saepe, ratione necessitatibus dolore sapiente corporis aliquam natus eligendi,
							praesentium et dolorum sint, laborum dicta consequatur enim temporibus ipsam iure ex
							rerum? Ullam obcaecati? Autem molestias vitae minus omnis
							laboriosam ullam, voluptas officia error praesentium, sunt, aspernatur sapiente esse
							qui
							id perferendis non corrupti a voluptatibus exercitationem illo quia perspiciatis
							voluptatem. Deleniti vel eveniet atque iusto quisquam alias optio dolore ipsa, odio
                                    nostrum reprehenderit eaque, sint, aliquid nesciunt?</p>
						</div>
					</div>
					<div class="content__main-text">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum eos ipsam autem
						consequatur
						vero voluptatibus repellendus, veniam nostrum eum quod quasi saepe recusandae odio ipsa
						expedita, ducimus ex numquam atque dolor, nam ratione. Nemo blanditiis mollitia quos,
						sit
						asperiores atque. Soluta, dicta nemo, modi alias vero officia vitae aspernatur dolor
						nulla
						recusandae impedit quas. Sunt accusantium quidem alias enim in labore accusamus maxime
						distinctio similique, consequuntur doloremque nisi asperiores pariatur fugiat. Commodi
						eveniet blanditiis possimus ipsam dolore consectetur alias ipsa officia, similique fuga
						sit,
						reiciendis veritatis velit labore repudiandae vitae quibusdam temporibus. Reprehenderit
						id
						autem provident velit nam voluptates est, aperiam ipsam dolores nihil ab, qui nemo iure
						deleniti esse obcaecati et illo suscipit sunt repellat doloribus optio voluptate!
						Deleniti
						nostrum sunt consequuntur corporis. Atque asperiores recusandae repellendus ipsa natus
						nulla
						aspernatur qui modi molestias, commodi id repellat dolorem quam ipsum repudiandae
						aperiam
						quia tempore iure dicta distinctio, corrupti iusto placeat? Recusandae temporibus
						nesciunt
						quibusdam excepturi assumenda adipisci, asperiores ex minima veritatis! Saepe officiis,
						deleniti quibusdam tenetur delectus veritatis quo magnam commodi vitae temporibus atque
						quam
						eius doloribus, blanditiis sequi recusandae exercitationem maxime reprehenderit quod?
						Dolorum excepturi animi, delectus aliquid sit officiis sequi dolores est tempora odit
						voluptas possimus quibusdam sapiente eligendi. Nemo explicabo illo enim rerum incidunt
						neque
						adipisci quibusdam nostrum cupiditate sunt cum, aut deleniti animi consequatur natus
						officiis modi tenetur voluptas ea reprehenderit minima! Quo, quos culpa. Enim aut nam
						temporibus, suscipit tempore fugiat? Vel iste magni ipsa est ullam quidem, nemo repellat
						nostrum quae id itaque error mollitia tempora? Enim iste earum explicabo nemo qui unde
						eveniet libero, quaerat facere numquam quos ipsum dolore iusto labore dignissimos,
						recusandae nam provident optio accusamus dolorem tenetur sint quam impedit. Corrupti
						explicabo quas asperiores impedit, est laudantium harum, alias, cum voluptatum
						accusantium
						nobis. Ipsam pariatur ad asperiores dicta earum. Cumque placeat vitae minima fugit.
						Earum
						illum atque harum magnam quae quisquam, vitae ab, placeat, aliquid dolore adipisci et
						totam?
						Repudiandae similique incidunt est tempore voluptatem magni sunt, dolorem maxime hic
						deserunt dolorum esse aut necessitatibus accusantium fugiat, repellat laudantium
						doloremque
                                quis, unde quam.</p>
					</div>
				</div>
			</div>
		</MainContentWrapper >
	)
}

export default History
