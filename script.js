// JavaScript to manage blog posts

const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');
const blogPost = document.getElementById('blogPost');
const backBtn = document.getElementById('backBtn');
const postTitleDisplay = document.getElementById('postTitleDisplay');
const postContentDisplay = document.getElementById('postContentDisplay');
const postDateDisplay = document.getElementById('postDateDisplay');

let posts = [];

// Function to add a new post
postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  const date = new Date().toLocaleString();

  const newPost = { title, content, date };
  posts.unshift(newPost);

  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';

  renderPosts();
});

// Function to render all posts
function renderPosts() {
  postsContainer.innerHTML = '';

  posts.forEach((post, index) => {
    const postPreview = document.createElement('div');
    postPreview.className = 'post-preview';
    postPreview.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 100)}...</p>
      <p class="post-date">${post.date}</p>
    `;
    postPreview.addEventListener('click', () => viewPost(index));
    postsContainer.appendChild(postPreview);
  });
}

// Function to view a specific post
function viewPost(index) {
  const post = posts[index];
  postTitleDisplay.innerText = post.title;
  postContentDisplay.innerText = post.content;
  postDateDisplay.innerText = `Posted on: ${post.date}`;
  
  document.querySelector('.blog-list').style.display = 'none';
  blogPost.style.display = 'block';
}

// Function to go back to the posts list
backBtn.addEventListener('click', function() {
  blogPost.style.display = 'none';
  document.querySelector('.blog-list').style.display = 'block';
});
