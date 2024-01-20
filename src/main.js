// Імпорт izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт simplelightbox'
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Скрипти
const formToFill = document.querySelector('.form');
const searchButton = document.querySelector('.search');
const inputToFill = document.querySelector('input[name="delay"]');
const galleryOfPictures = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let markup = '';
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// Дефолтне вимкнення кнопки
searchButton.setAttribute('disabled', true);

// Слухач подій на полі вводу
inputToFill.addEventListener('input', event => {
  if (event.target.value.trim() === '') {
    searchButton.setAttribute('disabled', true);
  } else {
    searchButton.removeAttribute('disabled');
  }
});

// Слухач форми
formToFill.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = inputToFill.value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'All fields must be filled!',
      position: 'topRight',
    });
    loader.style.display = 'none';
    return;
  } else {
    loader.style.display = 'block';
  }
  fetchImages(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        loader.style.display = 'none';
        galleryOfPictures.innerHTML = '';
        return;
      }
      markup = hits
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }) =>
            `<li class="gallery-item">
      <a  href="${largeImageURL}">
        <img 
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${likes}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${views}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${comments}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${downloads}</p>
        </div>
        </div>
      </li>`
        )
        .join('');
      loader.style.display = 'none';
      galleryOfPictures.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      event.target.reset();
    });
});

// Набір параметрів
function fetchImages(value) {
  const params = new URLSearchParams({
    key: '41859392-e5bc4a8d4ece805d6453ecbd7',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // Запит на сервер
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    return response.json();
  });
}
