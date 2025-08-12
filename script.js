let pictures = document.getElementById("pictures");

for (let i = 1; i <= 93; i++) {
  let img = document.createElement("img");
  img.src = "images/Photo" + i + ".jpg";
  pictures.appendChild(img);
}

