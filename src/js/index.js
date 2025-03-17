import { getVideoPoster } from "./utils/cloudinary";

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const resultImage = document.querySelector("[data-result-image]");
const downloadButton = document.querySelector("[data-download]");
const copyButton = document.querySelector("[data-copy]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const url = formData.get("url");
  const time = formData.get("time");

  if (!url) {
    // alert("Please enter a valid URL");
    return;
  }

  const poster = getVideoPoster(url, time);
  resultImage.src = poster;
});

downloadButton.addEventListener("click", () => {
  const poster = resultImage.src;
  // fetch the image
  fetch(poster)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "thumbnail.jpg";
      a.click();
    });
});

copyButton.addEventListener("click", () => {
  const poster = resultImage.src;
  navigator.clipboard.writeText(poster);
});
