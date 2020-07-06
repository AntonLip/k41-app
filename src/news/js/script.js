const cardMini = document.querySelector('.card__news'),
   cardBig = document.querySelector('.card__news-big'),
   cardMiniMore = document.querySelector('.card__news-footer-more'),
   cardBigClose = document.querySelector('.card__news-big-footer-close'),
   overlay = document.querySelector('.overlay');

cardMiniMore.addEventListener('click', function () {
   cardBig.style.display = 'block';
   cardMini.style.display = 'none';
   overlay.style.display = 'block';
   cardBig.style.boxShadow = 'none';
});

cardBigClose.addEventListener('click', function () {
   cardBig.style.display = 'none';
   cardMini.style.display = 'block';
   overlay.style.display = 'none';
});