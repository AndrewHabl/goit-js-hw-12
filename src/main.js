import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalPages = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = form.elements['search-text'].value.trim();
  page = 1;
  clearGallery();
  hideLoadMoreButton();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term', position: 'topRight' });
    return;
  }

  await fetchImages();
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  await fetchImages();
});

async function fetchImages() {
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0 && page === 1) {
      iziToast.error({
        message: 'No images found. Try another query!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    smoothScroll();

    totalPages = Math.ceil(data.totalHits / 15);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
      });
    }
  } catch (error) {
    iziToast.error({ message: 'Failed to fetch images', position: 'topRight' });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
