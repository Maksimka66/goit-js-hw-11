// Імпорт izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Скрипти
const searchForm = document.querySelector('.form');
const galleryOfPictures = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// Слухач форми
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  galleryOfPictures.innerHTML = '';
  const searchQuery = event.currentTarget.elements.delay.value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning!',
      message: 'All fileds must be filled!',
      position: 'topRight',
    });
    galleryOfPictures.innerHTML = '';
    return;
  }
  loader.style.display = 'block';

  fetchImages(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error!',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryOfPictures.innerHTML = '';
        return;
      }
      let markup = hits
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
      iziToast.error({
        title: 'Error!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      event.target.reset();
      loader.style.display = 'none';
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
