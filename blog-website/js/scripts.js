// This file contains the JavaScript code for the blog website.
// It includes functionality for interactivity, such as handling form submissions and loading blog posts dynamically.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comment-form");
  const commentList = document.getElementById("comments");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const commentText = commentInput.value;

      if (commentText) {
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
      }
    });
  }

  // Function to load blog posts dynamically (placeholder)
  function loadBlogPosts() {
    // This function can be expanded to fetch and display blog posts from an API or a local source.
  }

  loadBlogPosts();
});
