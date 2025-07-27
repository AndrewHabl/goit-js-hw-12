import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoaderTop,
  hideLoaderTop,
  showLoaderBottom,
  hideLoaderBottom,
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

  await fetchImages({ isInitial: true });
});

loadMoreBtn.addEventListener('click', async () => {
  hideLoadMoreButton();
  page++;
  await fetchImages({ isInitial: false });
});

async function fetchImages({ isInitial }) {
  if (isInitial) {
    showLoaderTop();
  } else {
    showLoaderBottom();
  }

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
    if (isInitial) {
      hideLoaderTop();
    } else {
      hideLoaderBottom();
    }
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery').firstElementChild;
  if (!firstCard) return;

  const { height: cardHeight } = firstCard.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  if (splash) splash.remove();
});