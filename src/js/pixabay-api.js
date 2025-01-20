export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: '48306389-9c3f7e9b102fd2bc2270acf47',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '60',
  });

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};
