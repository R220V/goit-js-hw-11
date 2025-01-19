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
import { createGalleryCardTemplate } from '../src/js/render-functions';
import { fetchPhotosByQuery } from '../src/js/pixabay-api';

const searchFormEl = document.querySelector('.js-form-search');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  //ф-ія викликається при сабміті форми
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim(''); //зчитуємо значення з інпута

  if (searchedQuery === '') {
    //перевірка, чи інпут не порожній
    alert('Поле має бути заповнено');
    return;
  }

  fetchPhotosByQuery(searchedQuery) //запит на сервер
    .then(data => {
      if (data.total === 0) {
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
