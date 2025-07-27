import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loaderTop = document.querySelector('.loader-top');
const loaderBottom = document.querySelector('.loader-bottom');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" title="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${downloads}</p>
          </div>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoaderTop() {
  loaderTop.classList.remove('is-hidden');
}
export function hideLoaderTop() {
  loaderTop.classList.add('is-hidden');
}

export function showLoaderBottom() {
  loaderBottom.classList.remove('is-hidden');
}
export function hideLoaderBottom() {
  loaderBottom.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}