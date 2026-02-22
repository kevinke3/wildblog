// js/admin.js
document.addEventListener('DOMContentLoaded', function() {
  const listContainer = document.getElementById('admin-post-list');
  if (!listContainer) return;

  const posts = window.blogData?.posts || [];
  listContainer.innerHTML = posts.map(post => `
    <li>
      <span>${post.title} (${post.date})</span>
      <span style="color:#b8b5aa">ID: ${post.id}</span>
    </li>
  `).join('');
});