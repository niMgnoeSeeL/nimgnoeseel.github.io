// Lightweight click-to-zoom for publication preview thumbnails.
// Caps the zoomed size at ~720px / 80vh so the image is enlarged
// noticeably (about 2-3x) without filling the entire viewport.
// The thumbnail is a downscaled webp, so the overlay opens with it right
// away and swaps in the original file once that has downloaded.
document.addEventListener("DOMContentLoaded", function () {
  const previews = document.querySelectorAll("img.preview");
  if (previews.length === 0) return;

  let overlay = null;

  const close = () => {
    if (!overlay) return;
    overlay.classList.remove("open");
    const dying = overlay;
    overlay = null;
    setTimeout(() => dying.remove(), 180);
    document.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") close();
  };

  const open = (preview) => {
    if (overlay) close();

    overlay = document.createElement("div");
    overlay.className = "preview-zoom-overlay";

    const img = document.createElement("img");
    img.src = preview.currentSrc || preview.src;
    if (preview.alt) img.alt = preview.alt;

    if (preview.currentSrc && preview.currentSrc !== preview.src) {
      const full = new Image();
      full.onload = () => {
        img.src = full.src;
      };
      full.src = preview.src;
    }

    overlay.appendChild(img);
    overlay.addEventListener("click", close);
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKeyDown);

    requestAnimationFrame(() => overlay.classList.add("open"));
  };

  previews.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      open(img);
    });
  });
});
