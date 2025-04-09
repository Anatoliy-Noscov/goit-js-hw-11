import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
          <div class="image-info">
            <div class="image-info-item">
              <span class="image-info-title">Likes</span>
              <span class="image-info-value">${image.likes}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Views</span>
              <span class="image-info-value">${image.views}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Comments</span>
              <span class="image-info-value">${image.comments}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Downloads</span>
              <span class="image-info-value">${image.downloads}</span>
            </div>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}
