import React from 'react';
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <Link to="#" class="cards-item cards__item">
      <div class="cards-item__bg">
        <img src="assets/img/news/img.png" alt=""></img>
      </div>
      <div class="cards-item__title">
        {props.title}
      </div>
      <div class="cards-item__info">
        <div class="cards-item__text">
          {props.from ? "От: " + props.from : null}
        </div>
        <div class="cards-item__text">
          {props.to ? "Кому: " + props.to : null}
        </div>
        <div class="cards-item__text">
          {props.date ? "Дата: " + props.date : null}
        </div>
      </div>
    </Link>
  );
}

export default Item;