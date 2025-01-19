// fetch('https://jsonplaceholder.typicode.com/posts?_sort=body&_limit=10') //робимо запит за постами
//   .then(response => {
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json(); //повертаємо розпаршені дані
//   })
//   //обробляємо проміс методами, дістаємо розпаршені дані
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     if (err.message === '404') {
//       alert('Постів не знайдено');
//     }
//   });

// fetch(
//   'https://api.unsplash.com/search/photos?client_id=VgVom1zWqHLL7Rt7mBXLC5YqRvQapFz6aLGinkF8ChQ&query=cat'
// );

const searchFormEl = document.querySelector('.js-form-search');
// console.log(searchFormEl);
const galleryEl = document.querySelector('.js-gallery');
// console.log(galleryEl);
const createGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-card">
        <img class="galley-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}"/>
    </li>`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim('');

  if (searchedQuery === '') {
    //перевірка на пусті введення в інпуті
    alert('Поле має бути заповнено');
    return;
  }
  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedQuery}&client_id=VgVom1zWqHLL7Rt7mBXLC5YqRvQapFz6aLGinkF8ChQ&per_page=12`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length === 0) {
        //перевірка на неіснуюче слово в інпуті
        alert('За таким ключовим словом зображень не знайдено');
        galleryEl.innerHTML = ''; //почистили галерею
        searchFormEl.reset(); //почистили імпут
        return;
      }
      const galleryTemplate = data.results
        .map(el => createGalleryCardTemplate(el))
        .join(''); //генеруємо розмітку
      galleryEl.innerHTML = galleryTemplate; //відмальовуємо на сторінці
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);

// import iziToast from 'izitoast';
// import SimpleLightbox from 'simplelightbox';
// import 'izitoast/dist/css/iziToast.min.css';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { createGalleryCardTemplate } from './js/render-functions';
// import { fetchPhotosByQuery } from './js/pixabay-api';

// const searchFormEl = document.querySelector('.js-search-form');
// const galleryEl = document.querySelector('.js-gallery');
// const loader = document.querySelector('.loader');
// const onSearchFormSubmit = event => {
//   event.preventDefault();

//   const searchedQuery = event.currentTarget.elements.user_query.value.trim();
//   if (searchedQuery === '') {
//     iziToast.error({
//       message: 'Please enter your request',
//       position: 'topRight',
//     });
//     return;
//   }
//   loader.classList.remove('is-hidden');
//   fetchPhotosByQuery(searchedQuery)
//     .then(data => {
//       if (data.total === 0) {
//         iziToast.error({
//           message:
//             '"Sorry, there are no images matching your search query. Please try again!"',
//           position: 'topRight',
//         });

//         galleryEl.innerHTML = '';
//         searchFormEl.reset();
//         return;
//       }

//       const galleryTemplate = data.hits
//         .map(el => createGalleryCardTemplate(el))
//         .join('');
//       galleryEl.innerHTML = galleryTemplate;
//       loader.classList.add('is-hidden');
//       const gallery = new SimpleLightbox('.js-gallery a', {
//         captionDelay: 300,
//         captionsData: 'alt',
//       });
//       gallery.refresh();
//     })
//     .catch(err => {
//       loader.style.display = 'none';
//       console.log(err);
//     });
//   searchFormEl.reset();
// };

// searchFormEl.addEventListener('submit', onSearchFormSubmit);
