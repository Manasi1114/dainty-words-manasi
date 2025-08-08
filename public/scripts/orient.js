document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img.auto-orient");

  images.forEach(img => {
    if (img.naturalWidth && img.naturalHeight) {
      const isPortrait = img.naturalHeight > img.naturalWidth;
      img.classList.add(isPortrait ? "portrait" : "landscape");
    } else {
      img.onload = () => {
        const isPortrait = img.naturalHeight > img.naturalWidth;
        img.classList.add(isPortrait ? "portrait" : "landscape");
      };
    }
  });
});
