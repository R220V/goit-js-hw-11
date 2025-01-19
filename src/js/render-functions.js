export const createGalleryCardTemplate = imgInfo => {
  return `
      <li class="gallery-card">
          <img class="galley-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}"/>
      </li>`;
};
