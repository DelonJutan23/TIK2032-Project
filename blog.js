document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.querySelectorAll('.blog-post');

    blogPosts.forEach(function(post) {

      post.addEventListener('mouseenter', function() {
        post.style.transform = 'scale(1.01)';
        post.style.transition = 'transform 0.3s ease'; 
      });
  
      post.addEventListener('mouseleave', function() {
        post.style.transform = 'scale(1)'; 
      });
    });
  });
  