const BASE_URL =
  'http://api.giphy.com/v1/gifs/search?api_key=UEauIJhxA2FQuVm0HuARQ4QW2rlShde7&limit=10';

function search(q) {
  return fetch(`${BASE_URL}&q=${q}`);
}

export default search;
