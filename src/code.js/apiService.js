const API_KEY = '21902781-05f70a6abac1a4120ac7c9ed1';
const BASE_URL = 'https://pixabay.com/api';


export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImgSearch() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

  //  const responseApi = await fetch(url);
  //  const { hits: images } = await responseApi.json();
  //  this.incrementPage();
  //  return images;

     return fetch(url)
     .then(r => r.json())
     .then(({ hits }) => {
     this.incrementPage();

     return hits;
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  };

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};


