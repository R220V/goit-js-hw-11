import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-form-search');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

//ф-ія викликається при сабміті форми
const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim(''); //зчитуємо значення з інпута
  //перевірка, чи інпут не порожній
  if (searchedQuery === '') {
    iziToast.error({
      title: 'Error',
      messageColor: 'Purple',
      color: 'red',
      position: 'topRight',
      message: 'Please enter your request',
      messageSize: '20',
    });
    return;
  }
  loader.classList.remove('is-hidden');

  fetchPhotosByQuery(searchedQuery) //запит на сервер
    .then(data => {
      if (data.total === 0) {
        //перевірка на неіснуюче слово в інпуті
        iziToast.error({
          title: 'Error',
          messageColor: 'Purple',
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        galleryEl.innerHTML = ''; //почистили галерею

        searchFormEl.reset(); //почистили імпут

        return;
      }
      //генеруємо розмітку
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      //відмальовуємо на сторінці
      galleryEl.innerHTML = galleryTemplate;

      loader.classList.add('is-hidden');

      // Ініціалізація SimpleLightbox
      let gallerySLB = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 300,
      });
      gallery.refresh();
    })
    .catch(err => {
      loader.style.display = 'none';

      console.log(err);
    });
  searchFormEl.reset();
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
