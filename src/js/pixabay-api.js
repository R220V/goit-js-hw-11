export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    query: searchedQuery,
    client_id: 'VgVom1zWqHLL7Rt7mBXLC5YqRvQapFz6aLGinkF8ChQ',
    per_page: 9,
  });

  return fetch(
    `https://api.unsplash.com/search/photos?${searchParams.toString()}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
