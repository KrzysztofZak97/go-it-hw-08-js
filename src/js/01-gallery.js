import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

for (const i of galleryItems) {
  const liEl = `<div class="gallery__item">
    <a class="gallery__link" href=${i.original}>
      <img
        class="gallery__image"
        src=${i.preview}
        data-source=${i.original}
        alt=${i.description}
      />
    </a>
  </div>`;
  galleryEl.insertAdjacentHTML("beforeend", liEl);
}

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  const modalbox = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  modalbox.show();
  galleryEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalbox.close();
    }
  });
});
