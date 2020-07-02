const btnDiscoverMore = document.querySelector('#btn-more');
const card = document.querySelector('#card');
const cardBig = document.querySelector('#card-big');
let bigCardClose = document.querySelector('#bigCardClose');

btnDiscoverMore.addEventListener('click', openBigCard);
bigCardClose.addEventListener('click', closeBigCard);

function openBigCard() {
   card.style.display = 'none';
   cardBig.style.display = 'flex';
}

function closeBigCard() {
   card.style.display = 'flex';
   cardBig.style.display = 'none';
}
