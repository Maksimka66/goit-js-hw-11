// Імпорт izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт simplelightbox'
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Скрипти
const formToFill = document.querySelector('.form');
const inputToFill = document.querySelector('input[name="delay"]');

const params = new URLSearchParams({
  key: '41859392-e5bc4a8d4ece805d6453ecbd7',
  q: inputToFill.value,
  image_photo: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

// Запит на сервер
const pictures = fetch('<https://pixabay.com/api/>', JSON.stringify(params))
  .then(response => {
    if (!response.ok) {
      iziToast.error({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    return response.json();
  })
  .then();

// Слухач форми
formToFill.addEventListener('submit', event => {
  event.preventDefault();
});
