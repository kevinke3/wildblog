// js/blog.js
document.addEventListener('DOMContentLoaded', function() {
  // check if we're on blog listing page
  const container = document.getElementById('blog-posts');
  if (container) {
    renderBlogList();
  }

  // check if we're on single post page (post.html)
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    renderSinglePost();
  }
});

function renderBlogList() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  const posts = window.blogData?.posts || [];
  container.innerHTML = posts.map(post => `
    <div class="blog-card" onclick="location.href='post.html?id=${post.id}'">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <h2>${post.title}</h2>
      <div class="meta">${post.date}</div>
      <p>${post.excerpt}</p>
    </div>
  `).join('');
}

function renderSinglePost() {
  // get id from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id')) || 1; // default to first

  const posts = window.blogData?.posts || [];
  const post = posts.find(p => p.id === postId) || posts[0];

  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = post.date;
  document.getElementById('post-body').innerHTML = post.content;
}