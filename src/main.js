// Імпорт izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт simplelightbox'
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Скрипти
const formToFill = document.querySelector('.form');
const inputToFill = document.querySelector('input[name="delay"]');
const galleryOfPictures = document.querySelector('.gallery');
let markup = '';
const loaderSpin = '<span class="loader"></span>';
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// Слухач форми
formToFill.addEventListener('submit', event => {
  event.preventDefault();
  galleryOfPictures.innerHTML = loaderSpin;
  const searchQuery = inputToFill.value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'All fields must be filled!',
      position: 'topRight',
    });
  }
  fetchImages(searchQuery)
    .then(({ hits }) => {
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
      galleryOfPictures.innerHTML = markup;
      lightbox.refresh();
      event.target.reset();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
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
