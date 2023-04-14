// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

for (const i of galleryItems) {
  const liEl = `<li><a class="gallery__item" href=${i.original}>
  <img class="gallery__image" src="${i.preview}" alt=${i.description} />
</a></li>`;
  galleryEl.insertAdjacentHTML('beforeend', liEl);
}

galleryEl.addEventListener('click', e => {
  e.preventDefault();
});
var lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});
