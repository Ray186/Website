//Take images in image folder and create img elements to display in masonry grid like format
let pictures = document.getElementById("pictures");
for (let i = 1; i <= 93; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let img = document.createElement("img");
  img.src = "images/Photo" + i + ".jpg";
  img.alt = "Photo " + i;
  img.classList.add("card-img-top", "clickable-img");
  card.appendChild(img);
  pictures.appendChild(card);
}


//Lightbox stuff starts here:
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let closeBtn = document.getElementById('close');

// Show lightbox on image click
document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

// Close lightbox on close button click
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Also close lightbox if click outside image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});