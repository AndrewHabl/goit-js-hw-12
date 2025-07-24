import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
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
      </li>
    `
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
}