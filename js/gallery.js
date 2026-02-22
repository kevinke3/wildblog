// js/gallery.js
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.getElementById('gallery-items');
  if (!galleryContainer) return;

  const images = window.blogData?.gallery || [];
  galleryContainer.innerHTML = images.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.caption}" loading="lazy">
      <div class="caption">${item.caption}</div>
    </div>
  `).join('');
});